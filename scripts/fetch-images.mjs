// Downloads free-license Unsplash photos, converts them to WebP (<300KB)
// and saves them into src/assets/images. Run with: npm run images
import sharp from 'sharp';
import { mkdir, writeFile, stat } from 'node:fs/promises';
import path from 'node:path';

const OUT = path.resolve('src/assets/images');

// name: [width, ...candidate Unsplash photo ids (first that works is used)]
const IMAGES = {
  'hero-main': [1600, '1586528116311-ad8dd3c8310d', '1553413077-190dd305871c'],
  'hero-port': [800, '1494412574643-ff11b0a5c1c3', '1578575437130-527eed3abbec'],
  'about-team': [900, '1600880292203-757bb62b4baf', '1552664730-d307ca884978'],
  'about-building': [900, '1486406146926-c627a92ad1ab', '1497366216548-37526070297c'],
  'platform-analyst': [900, '1551288049-bebda4e38f71', '1460925895917-afdab827c52f'],
  'usecases-manager': [900, '1581091226825-a6a2a5aee158', '1556761175-b413da4baf72'],
};

async function fetchOne(name, [width, ...ids]) {
  for (const id of ids) {
    const url = `https://images.unsplash.com/photo-${id}?w=${width}&q=85&fm=jpg&fit=crop`;
    const res = await fetch(url);
    if (!res.ok) {
      console.warn(`  ${name}: ${id} -> HTTP ${res.status}, trying next`);
      continue;
    }
    const input = Buffer.from(await res.arrayBuffer());
    let quality = 78;
    let out;
    do {
      out = await sharp(input).resize({ width, withoutEnlargement: true }).webp({ quality }).toBuffer();
      quality -= 8;
    } while (out.length > 300 * 1024 && quality > 30);
    const file = path.join(OUT, `${name}.webp`);
    await writeFile(file, out);
    const { size } = await stat(file);
    console.log(`  ${name}.webp  ${(size / 1024).toFixed(0)}KB  (unsplash ${id})`);
    return;
  }
  throw new Error(`No working source for ${name}`);
}

await mkdir(OUT, { recursive: true });
for (const [name, spec] of Object.entries(IMAGES)) {
  await fetchOne(name, spec);
}

// Smaller hero for mobile (used via srcSet in Hero.jsx).
await sharp(path.join(OUT, 'hero-main.webp')).resize({ width: 800 }).webp({ quality: 72 }).toFile(path.join(OUT, 'hero-main-sm.webp'));
console.log('  hero-main-sm.webp');

// Social share image (1200x630 JPEG) built from the hero photo with a dark overlay.
const overlay = Buffer.from(
  `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="g" x1="0" x2="1"><stop offset="0" stop-color="#0B0B0F" stop-opacity=".92"/><stop offset="1" stop-color="#0B0B0F" stop-opacity=".35"/></linearGradient></defs>
    <rect width="1200" height="630" fill="url(#g)"/>
    <path d="M110 92l26 15v30l-26 15-26-15v-30z" fill="none" stroke="#FF5A4E" stroke-width="5"/>
    <circle cx="110" cy="122" r="7" fill="#FF5A4E"/>
    <text x="152" y="136" font-family="Arial, sans-serif" font-size="40" font-weight="700" fill="#fff">Evrasko</text>
    <text x="84" y="330" font-family="Arial, sans-serif" font-size="58" font-weight="700" fill="#fff">See Supplier Risk Before</text>
    <text x="84" y="400" font-family="Arial, sans-serif" font-size="58" font-weight="700" fill="#fff">It Becomes a <tspan fill="#FF5A4E">Disruption</tspan></text>
    <text x="84" y="470" font-family="Arial, sans-serif" font-size="26" fill="#d4d4da">Supplier Intelligence &amp; Supply Chain Risk Forecasting</text>
  </svg>`,
);
await sharp(path.join(OUT, 'hero-main.webp'))
  .resize(1200, 630, { fit: 'cover' })
  .composite([{ input: overlay }])
  .jpeg({ quality: 82 })
  .toFile(path.resolve('public/og-image.jpg'));
console.log('  public/og-image.jpg');
