const puppeteer = require('puppeteer');
const CREDS = require('./creds');

let scrape = async () => {
    const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'], ignoreHTTPSErrors: true, dumpio: false, headless: false });
    const page = await browser.newPage();

    await page.goto('https://www.packtpub.com/login');
    //await page.click('#default > div > div > div > div > section > div:nth-child(2) > ol > li:nth-child(1) > article > div.image_container > a > img');
    //await page.click('#account-bar-login-register > a.login-popup > div');
    //await page.waitFor('#edit-submit-1', {display: block});
    //await page.click('#edit-submit-1');
    //await page.click('#account-bar-form-close > a');
    //await page.waitFor(5000);
    
    const USERNAME_SELECTOR = '#edit-name';
    const PASSWORD_SELECTOR = '#edit-pass';
    const BUTTON_SELECTOR = '#edit-post-form';
  
    await page.type(USERNAME_SELECTOR, CREDS.username);
    await page.type(PASSWORD_SELECTOR, CREDS.password);
    await page.click(BUTTON_SELECTOR);

    await page.waitForNavigation();

    const result = await page.evaluate(() => {
        let errorMsg = document.querySelector('.messages').innerText;
        return {
            errorMsg
        };

    });

    browser.close();
    return result;
};

scrape().then((value) => {
    console.log(value); // Success!
});