// generate-pdf.js
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Replace this URL with the URL of your Next.js app
  await page.goto('http://localhost:3000/pdf-page', {
    waitUntil: 'networkidle2',
  });

  await page.pdf({
    path: 'component.pdf',
    format: 'A4',
    printBackground: true,
  });

  await browser.close();
})();
