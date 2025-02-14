
const {test, expect} = require('@playwright/test')

test.beforeAll("Before Each", async ({page})=>{
    await page.goto("https://dev-jatri.jatritech.com/");
})

test("Trip Search", async ({page})=>{
    const title = page.title();
    console.log(title);
    expect(page).toHaveTitle("Home - Multi Modality");
})