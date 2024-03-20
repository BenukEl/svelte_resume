const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('file:///home/benoit/Documents/cv_js/cv.html', {waitUntil: 'networkidle0'});
  await page.pdf({
    path: 'cv.pdf',
    format: 'A4',
    omitBackground: false,
    printBackground: true
  });

  await browser.close();
})();
