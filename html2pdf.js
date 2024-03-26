import  puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:5173', {waitUntil: 'networkidle0'});
  await page.pdf({
    path: 'cv.pdf',
    format: 'A4',
    omitBackground: false,
    printBackground: true,
  });

  await browser.close();
})();
