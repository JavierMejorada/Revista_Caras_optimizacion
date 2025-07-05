const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const IMAGE_CONFIG = {
  'Logo%202.png': { width: 300, quality: 85 },
  'Logo%201.png': { width: 200, quality: 85 },
  'SI_MEXIS_Angel_Independencia_1920x1080.jpg': { width: 800, quality: 80 },
  'sunset-manhattan-williamsburg-panoramic-photography-wallpaper.jpg': { width: 800, quality: 75 },
  'quite-the-noise-el-espectacular-anuncio-de-apple-para-promocionar-los-nuevos-airpods.jpg': { width: 600, quality: 80 },
  
  'R.png': { width: 64, quality: 90 },
  'R%20(1).png': { width: 64, quality: 90 },
  'logo-twitter-circle-png-transparent-image-1.png': { width: 64, quality: 90 }
};

const processImage = async (filename, { width, quality }) => {
  const inputPath = path.join(__dirname, '../public/img', filename);
  const outputWebP = inputPath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  
  if (!fs.existsSync(inputPath)) return;

  try {
    // Conversión a WebP
    await sharp(inputPath)
      .resize({ width })
      .webp({ quality })
      .toFile(outputWebP);

    const outputAvif = inputPath.replace(/\.(jpg|jpeg|png)$/i, '.avif');
    await sharp(inputPath)
      .resize({ width })
      .avif({ quality: quality - 5 })
      .toFile(outputAvif);

    console.log(`Optimizada: ${filename} → [${path.basename(outputWebP)}, ${path.basename(outputAvif)}]`);
  } catch (error) {
    console.error(`Error procesando ${filename}:`, error);
  }
};

const processAllImages = async () => {
  const operations = Object.entries(IMAGE_CONFIG).map(
    ([filename, config]) => processImage(filename, config)
  );
  await Promise.all(operations);
};

processAllImages().then(() => console.log('✅ Todas las imágenes optimizadas'));