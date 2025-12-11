// scripts/make-thumbs.js
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = path.join(__dirname, '..', 'public', 'images', 'easehealth');
const outDir = srcDir; // save thumbnails in same folder

// thumbnail width
const THUMB_W = 600;
// quality for webp
const QUALITY = 80;

if (!fs.existsSync(srcDir)) {
  console.error('Source folder not found:', srcDir);
  process.exit(1);
}

const files = fs.readdirSync(srcDir).filter(f =>
  /\.(png|jpe?g|webp)$/i.test(f) && !/_600\.webp$/i.test(f)
);

if (files.length === 0) {
  console.log('No images found to process in', srcDir);
  process.exit(0);
}

(async () => {
  for (const file of files) {
    try {
      const full = path.join(srcDir, file);
      // produce a thumbnail filename
      const base = file.replace(/\.(png|jpe?g|webp)$/i, '');
      const outName = `${base}_600.webp`;
      const outPath = path.join(outDir, outName);

      // skip if thumbnail already exists
      if (fs.existsSync(outPath)) {
        console.log('Skipped (exists):', outName);
        continue;
      }

      // read image and resize
      await sharp(full)
        .resize({ width: THUMB_W, withoutEnlargement: true })
        .webp({ quality: QUALITY })
        .toFile(outPath);

      console.log('Created:', outName);
    } catch (err) {
      console.error('Error processing', file, err);
    }
  }
  console.log('Done.');
})();
