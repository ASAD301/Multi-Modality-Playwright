const { test } = require('@playwright/test');
test.describe.configure({ mode: 'serial' });
const { UserControllerPage } = require('../Controller/UserControllerPage');
const dataSet = JSON.parse(JSON.stringify(require('../JsonFiles/UserCredentials.json')));
const { fetchOtpFromRedis } = require('../OTP/GetOtpFromRedis');
const { fetchMostRecentOtpFromMongo } = require('../OTP/GerOtpFromDatabase');

let page;
let userControllerPage;

test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    page = await context.newPage();
    userControllerPage = new UserControllerPage(page);
});

test.skip('Test-1 :: Visit the website and login with valid OTP from Redis', async () => {
    try {
        const homePage = userControllerPage.getHomePage();
        await homePage.openHomepage();

        const loginPage = userControllerPage.getLoginPage();
        await loginPage.openLoginPage();
        await loginPage.enterValidPhoneNumber(dataSet.userPhoneNumber);
        await loginPage.clickOnGetOtpButton();

        console.log('Waiting for OTP...');
        const otp = await fetchOtpFromRedis(dataSet.userPhoneNumber);
        console.log(`Fetched OTP: ${otp}`);
        await loginPage.enterValidOtp(otp);
    } catch (error) {
        console.error('Failed to fetch OTP:', error);
        throw error;
    }
});

test('@PurchaseSingleSeat @PurchaseMultipleSeat Test-2 :: Visit the website and login with valid OTP from Database', async () => {
    try {
        const homePage = userControllerPage.getHomePage();
        await homePage.openHomepage();

        const loginPage = userControllerPage.getLoginPage();
        await loginPage.openLoginPage();
        await loginPage.enterValidPhoneNumber(dataSet.userPhoneNumber);
        await loginPage.clickOnGetOtpButton();

        console.log('Waiting for OTP...');
        const otp = await fetchMostRecentOtpFromMongo(dataSet.userPhoneNumber);
        console.log(`Fetched OTP: ${otp}`);
        await loginPage.enterValidOtp(otp);
    } catch (error) {
        console.error('Failed to fetch OTP:', error);
        throw error;
    }
});

test('@PurchaseSingleSeat @PurchaseMultipleSeat Test-3 :: Enter From City for searching trips', async () => {
    try {
        const searchPage = userControllerPage.getSearchPage();
        await searchPage.setFromCity();
    } catch (error) {
        console.error('Failed to set from city', error);
        throw error;
    }
});