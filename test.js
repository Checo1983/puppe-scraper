const puppeteer = require('puppeteer');
const CREDS = require('./creds');

//let scrape = async () => {
async function scrape() {
    const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'], ignoreHTTPSErrors: true, dumpio: false, headless: false });
    const page = await browser.newPage();

    await page.goto('https://www.packtpub.com/login');
    
    const USERNAME_SELECTOR = '#edit-name';
    const PASSWORD_SELECTOR = '#edit-pass';
    const BUTTON_SELECTOR = '#edit-post-form';
  
    await page.type(USERNAME_SELECTOR, CREDS.username);
    await page.type(PASSWORD_SELECTOR, CREDS.password);
    await page.click(BUTTON_SELECTOR);

    await page.waitForNavigation();

    const SEARCH_TEXT = 'Salesforce';
    const SEARCH_SELECTOR = '#main-search-keys';
    const SEARCH_BUTTON_SELECTOR = '#menu-bar-search > span';

    await page.type(SEARCH_SELECTOR, SEARCH_TEXT);
    await page.click(SEARCH_BUTTON_SELECTOR);

    await page.waitForNavigation();
    
    const result = 'Success';
    /*const result = await page.evaluate(() => {
        let errorMsg = document.querySelector('.messages').innerText;
        return {
            errorMsg
        };

    });*/

    browser.close();
    return result;
};

module.exports.scrape = scrape;
/*scrape().then((value) => {
    console.log(value); // Success!
});*/