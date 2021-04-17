const puppeteer = require("puppeteer");
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch({ headless: false});
    const page = await browser.newPage();
    await page.goto("https://mangalivre.net/ler/mashle/online/293786/capitulo-58");
    
    //await page.click('div.page-next');
    const getPages = await page.evaluate(() => {

    const MangaCap = [];

    const ElementToNextPage =  document.querySelector("div.page-next");

    const initialandLastPages = [...document.querySelectorAll(".page-navigation em")].map(em => em.innerHTML);
    
        const firstPage = parseInt(initialandLastPages[0]);
        
        const lastPage = parseInt(initialandLastPages[1]);

        /* console.log(firstPage, lastPage);

        console.log("imga", 
        document.querySelector(".manga-image img").src); */

        for(let count = firstPage; count < lastPage; count++) {
            MangaCap.push(document.querySelector(".manga-image img").src);
            ElementToNextPage.click();
        }
        
        console.log(MangaCap);
        //const test_html = `<html><img src="https://i0.wp.com/static2cdn.mangalivre.com/firefox/-J1phfjdriPti3UgyAGr7Q/m6824745/9189/280576/293786/003.png"></html>`;
        return MangaCap;
    });

    //await page.pdf({ path: "manga.pdf", format: "a4" });
  
   //await browser.close();
  })();