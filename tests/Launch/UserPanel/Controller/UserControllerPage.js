const { HomePage } = require('../Pages/HomePage/HomePage');
const { LoginPage } = require('../Pages/LoginPage/LoginPage');
const { SearchPage }  = require('../Pages/SearchPage/SearchPage');


class UserControllerPage {
    constructor(page) {
        this.page = page;
        this.homePage = new HomePage(this.page);
        this.loginPage = new LoginPage(this.page);
        this.searchPage = new SearchPage(this.page)
    }
    getHomePage(){
        return this.homePage;
    }

    getLoginPage(){
        return this.loginPage;
    }

    getSearchPage(){
        return this.searchPage;
    }
}
module.exports = { UserControllerPage };