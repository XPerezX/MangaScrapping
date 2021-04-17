const puppeteer = require("puppeteer");
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://mangalivre.net/ler/solo-leveling/online/294603/capitulo-147");
    
    //await page.click('div.page-next');
    const getHtmlPages = await page.evaluate(() => {

    const MangaCap = [];

    const ElementToNextPage =  document.querySelector("div.page-next");

    const initialandLastPages = [...document.querySelectorAll(".page-navigation em")].map(em => em.innerHTML);
    
        const firstPage = parseInt(initialandLastPages[0]);
        
        const lastPage = parseInt(initialandLastPages[1]);

        /* console.log(firstPage, lastPage);

        console.log("imga", 
        document.querySelector(".manga-image img").src); */

        for(let count = firstPage; count < lastPage; count++) {
            MangaCap.push(`<img src="${document.querySelector(".manga-image img").src}">`);
            ElementToNextPage.click();
        }
        
        const MangaImageTags = MangaCap.join("");
        const test_html = `<html>${MangaImageTags}</html>`;
        //const test_html = `<html><img src="https://i0.wp.com/static2cdn.mangalivre.com/firefox/-J1phfjdriPti3UgyAGr7Q/m6824745/9189/280576/293786/003.png"></html>`;
        return test_html;
    });

    await page.goto(`data:text/html,${getHtmlPages}`, { waitUntil: 'networkidle0' });
    await page.pdf({ path: "manga.pdf", format: "a4" });
    await browser.close();
  })();