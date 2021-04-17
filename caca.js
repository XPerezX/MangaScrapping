const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const test_html = `<html><img src="https://i0.wp.com/static2cdn.mangalivre.com/firefox/-J1phfjdriPti3UgyAGr7Q/m6824745/9189/280576/293786/003.png"></html>`;
  await page.goto(`data:text/html,${test_html}`, { waitUntil: 'networkidle0' });
  //await browser.close();
  await page.pdf({ path: "manga.pdf", format: "a4" });
})();