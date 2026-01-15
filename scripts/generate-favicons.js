const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [16, 32, 48, 64, 128, 192, 512];
const inputFile = path.join(__dirname, '../logo.png');
const publicDir = path.join(__dirname, '../public');

async function generateFavicons() {
  try {
    // Generate various PNG sizes
    for (const size of sizes) {
      await sharp(inputFile)
        .resize(size, size, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 0 }
        })
        .png()
        .toFile(path.join(publicDir, `favicon-${size}x${size}.png`));
      console.log(`Generated favicon-${size}x${size}.png`);
    }

    // Generate apple-touch-icon
    await sharp(inputFile)
      .resize(180, 180, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .png()
      .toFile(path.join(publicDir, 'apple-touch-icon.png'));
    console.log('Generated apple-touch-icon.png');

    // Generate favicon.ico (32x32)
    await sharp(inputFile)
      .resize(32, 32, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .png()
      .toFile(path.join(publicDir, 'favicon.png'));
    console.log('Generated favicon.png');

    // Generate logo for the site
    await sharp(inputFile)
      .resize(200, 200, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .png()
      .toFile(path.join(publicDir, 'logo.png'));
    console.log('Generated logo.png');

    console.log('All favicons generated successfully!');
  } catch (error) {
    console.error('Error generating favicons:', error);
  }
}

generateFavicons();
