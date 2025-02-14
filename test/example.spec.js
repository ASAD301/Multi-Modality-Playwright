// @ts-check
const { test, expect } = require('@playwright/test');
const { beforeEach } = require('node:test');


test("BrowserContext", async ({browser})=>
{
  const contex = browser.newContext(); // browser.newContext - new refresh browser - only open browser
  const page = (await contex).newPage(); // fresh page open 
});

test("Guest Login Testcase ", async ({page})=>{
  test.beforeEach( async ({page})=>{
    await page.goto("https://dev-jatri.jatritech.com/");
  })
});

test("Page Title ", async ({page})=>{
  await page.title();
  await expect(page).toHaveTitle("jatri");
})
