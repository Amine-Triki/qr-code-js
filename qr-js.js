const QRCode = require('qrcode');
/* const fs = require('fs'); */

// create QR Codes
const links = {
  "aminetriki_site": "https://aminetriki.com.tn",
  "aminetriki_youtube": "https://www.youtube.com/@aminetrikitv"
};

for (const [name, link] of Object.entries(links)) {
  QRCode.toFile(`${name}.png`, link, {
    width: 300,
    height: 300
  }, function (error) {
    if (error) console.error(`Error while generating QR for ${name}:`, error);
    else console.log(`${name}.png  Created successfully `);
  });
}
