<?php
// Saves a "Request a Demo" form submission to the demo_requests table.
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

function respond(int $code, array $body): void
{
    http_response_code($code);
    echo json_encode($body);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, ['ok' => false, 'error' => 'Method not allowed']);
}

$data = json_decode(file_get_contents('php://input') ?: '', true);
if (!is_array($data)) {
    respond(400, ['ok' => false, 'error' => 'Invalid request']);
}

// Honeypot: real users never fill this hidden field.
if (!empty($data['website'])) {
    respond(200, ['ok' => true]);
}

$clean = fn ($v, int $max) => mb_substr(trim((string) ($v ?? '')), 0, $max);

$name    = $clean($data['name'] ?? '', 120);
$email   = $clean($data['email'] ?? '', 190);
$company = $clean($data['company'] ?? '', 190);
$role    = $clean($data['role'] ?? '', 120);
$phone   = $clean($data['phone'] ?? '', 30);
$message = $clean($data['message'] ?? '', 5000);
$consent = !empty($data['consent']);

$errors = [];
if ($name === '') $errors['name'] = 'Name is required.';
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) $errors['email'] = 'A valid email is required.';
if ($company === '') $errors['company'] = 'Company is required.';
if (mb_strlen($message) < 20) $errors['message'] = 'Message must be at least 20 characters.';
if ($phone !== '' && !preg_match('/^\+?[\d\s().-]{7,20}$/', $phone)) $errors['phone'] = 'Phone number is not valid.';
if (!$consent) $errors['consent'] = 'Consent is required.';

if ($errors) {
    respond(422, ['ok' => false, 'errors' => $errors]);
}

$config = require __DIR__ . '/config.php';

try {
    $pdo = new PDO(
        sprintf('mysql:host=%s;port=%d;dbname=%s;charset=utf8mb4', $config['db_host'], $config['db_port'], $config['db_name']),
        $config['db_user'],
        $config['db_pass'],
        [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, PDO::ATTR_EMULATE_PREPARES => false]
    );

    // Simple rate limit: max 5 requests per IP per hour.
    $ip = $_SERVER['REMOTE_ADDR'] ?? null;
    $stmt = $pdo->prepare('SELECT COUNT(*) FROM demo_requests WHERE ip_address = ? AND created_at > (NOW() - INTERVAL 1 HOUR)');
    $stmt->execute([$ip]);
    if ((int) $stmt->fetchColumn() >= 5) {
        respond(429, ['ok' => false, 'error' => 'Too many requests. Please try again later.']);
    }

    $stmt = $pdo->prepare(
        'INSERT INTO demo_requests (name, email, company, role, phone, message, ip_address, user_agent)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)'
    );
    $stmt->execute([
        $name,
        $email,
        $company,
        $role !== '' ? $role : null,
        $phone !== '' ? $phone : null,
        $message,
        $ip,
        mb_substr($_SERVER['HTTP_USER_AGENT'] ?? '', 0, 255),
    ]);

    respond(201, ['ok' => true, 'id' => (int) $pdo->lastInsertId()]);
} catch (Throwable $e) {
    error_log('[evrasko demo-request] ' . $e->getMessage());
    respond(500, ['ok' => false, 'error' => 'Server error']);
}
