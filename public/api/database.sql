-- Evrasko website database
-- Import this file in phpMyAdmin (or run: mysql -u root -p < database.sql)

CREATE DATABASE IF NOT EXISTS evrasko CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE evrasko;

CREATE TABLE IF NOT EXISTS demo_requests (
  id          INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name        VARCHAR(120)  NOT NULL,
  email       VARCHAR(190)  NOT NULL,
  company     VARCHAR(190)  NOT NULL,
  role        VARCHAR(120)  NULL,
  phone       VARCHAR(30)   NULL,
  message     TEXT          NOT NULL,
  ip_address  VARCHAR(45)   NULL,
  user_agent  VARCHAR(255)  NULL,
  status      ENUM('new','contacted','closed') NOT NULL DEFAULT 'new',
  created_at  TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_email (email),
  INDEX idx_created (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
