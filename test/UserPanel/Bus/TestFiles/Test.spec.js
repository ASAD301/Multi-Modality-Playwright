const {test, expect} = require('@playwright/test');
const{HomePage} = import("../Pages/HomePage/HomePage");



test.beforeAll("Before Each", async ({page})=>{
       await page.goto("https://dev-jatri.jatritech.com/");
})

test("Homepage ", async ({page}) => {
       const homePage = new HomePage(page);

})






