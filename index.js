const puppeteer = require("puppeteer");

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("https://mangalivre.net/ler/mashle/online/293786/capitulo-58");
    
    //await page.click('div.page-next');
    await page.evaluate(() => {

    const MangaCap = [];

    const initialandLastPages = [...document.querySelectorAll(".page-navigation em")].map(em => em.innerHTML);
    
        const firstPage = parseInt(initialandLastPages[0]);
        
        const lastPage = parseInt(initialandLastPages[1]);

        /* console.log(firstPage, lastPage);

        console.log("imga", 
        document.querySelector(".manga-image img").src); */

        for(let count = firstPage; count < lastPage; count++) {
            MangaCap.push(document.querySelector(".manga-image img").src);
        }
 
        // const list = [...document.querySelectorAll(".manga-image img")].map(({src}) => MangaCap.push(src) );
        console.log(MangaCap);
    });
    //await page.pdf({path: 'manga.pdf'});
  
   // await browser.close();
  })();