// @ts-check
const { test, expect } = require('@playwright/test');
const { beforeEach } = require('node:test');


// test("ContexBrowser", async ({browser})=>
// {
//   const contex = browser.newContext(); // browser.newContext - new refresh browser - only open browser
//   const page = (await contex).newPage(); // fresh page open 
// });

test.beforeEach(" load url each of the test case",async ({page})=>{
  await page.goto("https://dev-jatri.jatritech.com/");
})
test("Page Title ", async ({page})=>{
 const title = await page.title();
 console.log(title)
 await expect(page).toHaveTitle("Home - Multi Modality");
})
