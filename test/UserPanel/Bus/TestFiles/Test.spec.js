const { test } = require('@playwright/test');
test.describe.configure({ mode: 'serial' });
const { UserControllerPage } = require('../Controller/UserControllerPage');
//const dataSet = JSON.parse(JSON.stringify(require('../JsonFiles/UserCredentials.json')));

let page;
let userControllerPage;

test.beforeAll(async ({ browser }) => {
       const context = await browser.newContext();
       page = await context.newPage();
       userControllerPage = new UserControllerPage(page);
       await this.page.goto("https://dev-jatri.jatritech.com/");
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

test('@PurchaseSingleSeat @PurchaseMultipleSeat Test-4 :: Enter Destination City for searching trips', async () => {
       try {
              const searchPage = userControllerPage.getSearchPage();
              await searchPage.setDestinationCity();
       } catch (error) {
              console.error('Failed to set destination city', error);
              throw error;
       }
});

test('@PurchaseSingleSeat @PurchaseMultipleSeat Test-5 :: Enter Journey Date(Current Date) for searching trips', async () => {
       try {
              const searchPage = userControllerPage.getSearchPage();
              await searchPage.setJourneyDateUsingCurrentDate();
       } catch (error) {
              console.error('Failed to set journey date', error);
              throw error;
       }
});

test.skip('Test-6 :: Enter Journey Date(Static Date) for searching trips', async () => {
       try {
              const searchPage = userControllerPage.getSearchPage();
              await searchPage.setJourneyDateUsingStaticDate();
       } catch (error) {
              console.error('Failed to set journey date', error);
              throw error;
       }
});

test('@PurchaseSingleSeat @PurchaseMultipleSeat Test-7 :: Click on Search Button for searching trips', async () => {
       try {
              const searchPage = userControllerPage.getSearchPage();
              await searchPage.searchTrip();
       } catch (error) {
              console.error('Failed to click on search button', error);
              throw error;
       }
});

test('@PurchaseSingleSeat @PurchaseMultipleSeat Test-8 :: Change the services to the bus section', async () => {
       try {
              const searchPage = userControllerPage.getSearchPage();
              await searchPage.openTheBusSection();
       } catch (error) {
              console.error('Failed to change the tab', error);
              throw error;
       }
});

test('@PurchaseSingleSeat @PurchaseMultipleSeat Test-9 :: Search trips for the opposite direction using by direction switch button ', async () => {
       try {
              const searchPage = userControllerPage.getSearchPage();
              await searchPage.modifySearch();
       } catch (error) {
              console.error('Failed to modifying the search', error);
              throw error;
       }
});

test('@PurchaseSingleSeat @PurchaseMultipleSeat Test-10 :: Find a specific trips for ticketing and go to the seat plan', async () => {
       try {
              const tripListPage = userControllerPage.getTripListPage();
              await tripListPage.findTripsAndGoToTheSelectSeatsSection();
       } catch (error) {
              console.error('Failed to search the trip', error);
              throw error;
       }
});

test('@PurchaseSingleSeat Test-11 :: Select a single seat from the seat view section', async () => {
       try {
              const purchaseSingleSeat = userControllerPage.getPurchaseSingleSeat();
              const userBookingDetailsPage = userControllerPage.getUserBookingDetailsPage();
              const selectingPaymentMethodPage = userControllerPage.getSelectingPaymentMethodPage();
              const ticketConfirmationPage = userControllerPage.getTicketConfirmationPage();
              await purchaseSingleSeat.selectSingleSeatFromSeatView();
              await userBookingDetailsPage.userBookingDetails();
              await selectingPaymentMethodPage.selectingPaymentMethodAndTicketConfirmation();
              await ticketConfirmationPage.ticketConfirmation();
       } catch (error) {
              console.error('Failed to select a seat', error);
              throw error;
       }
});

test('@PurchaseMultipleSeat Test-12 :: Select multiple seats from the seat view section', async () => {
       try {
              const userBookingDetailsPage = userControllerPage.getUserBookingDetailsPage();
              const selectingPaymentMethodPage = userControllerPage.getSelectingPaymentMethodPage();
              const ticketConfirmationPage = userControllerPage.getTicketConfirmationPage();
              await userBookingDetailsPage.userBookingDetails();
              await selectingPaymentMethodPage.selectingPaymentMethodAndTicketConfirmation();
              await ticketConfirmationPage.ticketConfirmation();
       } catch (error) {
              console.error('Failed to select seats', error);
              throw error;
       }
});



test.afterAll(async () => {
       await page.pause();
});
