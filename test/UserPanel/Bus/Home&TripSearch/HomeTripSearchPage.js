
class HomeTripSearchPage{
    constructor(page){
        this.page = page;
        this.fromLocation = page.locator("#from");
        this.toLocation = page.locator("#to");
        this.date = page.locator("#date");
        this.button = page.locator("#date");

    }

    async searchBox(){
        await this.fromLocation.click();
        await this.fromLocation.
    }
}

export default HomeTripSearchPage;