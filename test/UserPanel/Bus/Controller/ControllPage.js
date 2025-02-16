const { HomePage } = require('../Pages/HomePage/HomePage');
const { SearchPage }  = require('../Pages/SearchPage/SearchPage');
const { TripListPage } = require('../Pages/TripListPage/TripListPage');
const { PurchaseSingleSeat } = require('../Pages/Ticketing/ConfirmTicket/PurchaseSingleSeat');
const { PurchaseMultipleSeat } = require('../Pages/Ticketing/ConfirmTicket/PurchaseMultipleSeat')
const { UserBookingDetailsPage } = require('../Pages/Ticketing/ConfirmTicket/UserBookingDetailsPage');
const { SelectingPaymentMethodPage } = require('../Pages/Ticketing/ConfirmTicket/SelectingPaymentMethodPage');
const { TicketConfirmationPage } = require('../Pages/Ticketing/ConfirmTicket/TicketConfirmationPage');

class UserControllerPage {
    constructor(page){
        this.page = page;
        this.homePage = new HomePage(this.page);
        this.searchPage = new SearchPage(this.page);
        this.tripListPage = new TripListPage(this.page);
        this.purchaseSingleSeat = new PurchaseSingleSeat(this.page);
        this.purchaseMultipleSeat = new PurchaseMultipleSeat(this.page);
        this.userBookingDetailsPage = new UserBookingDetailsPage(this.page);
        this.selectingPaymentMethodPage = new SelectingPaymentMethodPage(this.page);
        this.ticketConfirmationPage = new TicketConfirmationPage(this.page);

    }

    getHomePage(){
        return this.homePage;
    }

    getSearchPage(){
        return this.searchPage;
    }

    getTripListPage(){
        return this.tripListPage;
    }

    getPurchaseSingleSeat(){
        return this.purchaseSingleSeat;
    }

    getPurchaseMultipleSeat(){
        return this.purchaseMultipleSeat;
    }

    getUserBookingDetailsPage(){
        return this.userBookingDetailsPage;
    }

    getSelectingPaymentMethodPage(){
        return this.selectingPaymentMethodPage;
    }

    getTicketConfirmationPage(){
        return this.ticketConfirmationPage;
    }
}
module.exports = { UserControllerPage };