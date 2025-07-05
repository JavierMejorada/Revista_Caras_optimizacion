const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, 'src', 'img');
const outputDir = path.join(__dirname, 'build', 'static', 'media');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.readdirSync(inputDir).forEach(file => {
  if (/\.(jpg|jpeg|png)$/i.test(file)) {
    const name = path.parse(file).name;
    sharp(path.join(inputDir, file))
      .webp({ quality: 80 })
      .toFile(path.join(outputDir, `${name}.webp`))
      .then(() => console.log(`Optimized ${file} to WebP`))
      .catch(err => console.error(`Error processing ${file}:`, err));
  }
});