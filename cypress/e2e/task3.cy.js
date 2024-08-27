import { Signin } from '../PageObjects/Signin'
const signin = new Signin
import { InputField } from '../PageObjects/InputField'
const inputField = new InputField()
import { SourceObj } from '../PageObjects/SourceObj'
const sourceObj= new SourceObj()
import { GuestInfo } from '../PageObjects/GuestInfo'
const guestInfo= new GuestInfo()
//import { DateSh } from '../PageObjects/DateSh'
//const dateSh= new DateSh()
describe('Booking', () => {
    beforeEach(()=>{
        signin.visitLoginUrl()
        inputField.inputCredentials('waqasmanual@mailinator.com', 'Boring321')
        signin.successfullLogin()
        cy.visit('https://master.chargeautomation.com/client/v2/bookings')
        cy.get('div.table-box-check.d-flex').contains('ID').should('be.visible')
    })
    it('validates booking', () => {
        signin.visitLoginUrl()
        inputField.inputCredentials('waqasmanual@mailinator.com', 'Boring321')
        signin.successfullLogin()
        cy.visit('https://master.chargeautomation.com/client/v2/bookings')
        cy.get('div.table-box-check.d-flex').contains('ID').should('be.visible')
        cy.get('span.translate').contains('Guest').should('be.visible')
        cy.get('a.booking-box-checkin').contains('Check').should('be.visible')
        cy.get('div.booking-box-duration').contains('→').should('be.visible')
        cy.get('a.booking-box-checkout').contains('Check-Out').should('be.visible')
        cy.get('a.security-label').contains('Security').should('be.visible')
        cy.get('span.amount-label.translate').contains('Reservation').should('be.visible')
        cy.contains('div.inline', '2446-10396778').should('be.visible')
        cy.contains('p.m-0.translate', 'Confirmed').should('be.visible')
        cy.contains('div.col-2.col-xs-6.col-style', 'Veronica').should('be.visible')
        cy.contains('div.small.text-success', 'Pre check-in completed').should('exist').and('be.visible')
        cy.get('div.booking-box-checkin.checkin-label.translate').should('exist').and('be.visible')
        cy.get('div.small.text-muted').contains('JUL').next().should('contains.text', '2024').and('be.visible')
        cy.contains('div.booking-box-duration.duration-label.translate', '2 nights').should('be.visible')
        cy.get('div.booking-box-checkout.checkout-label.translate').should('exist').and('be.visible')
        cy.get('div.booking-box-checkout.checkout-label.translate').contains('JUL').next().should('contains.text', '2024').should('be.visible')
        cy.contains('span.notranslate.sd_amount_of_105150', '$100.00').should('be.visible')
        cy.contains('span#bl-sd-105150.badge.notranslate.badge-success', 'Partially Captured').should('be.visible')
        cy.contains('span.notranslate.total_amount_of_105150', '$100.00').should('be.visible')
        cy.get('i#105150.fas.fa-chevron-up').should('exist').and('be.visible').click()
        cy.contains('h2.card-section-title.translate', 'Booking Details').should('be.visible')
        cy.contains('div.small.translate', 'Booking Date').should('be.visible')
        cy.contains('div.booking-details-box', 'Jul 17, 2024 12:11').should('be.visible')
        cy.contains('div.small.translate', 'Guest').should('be.visible')
        cy.get('div.small.translate').contains('Guest Contact').next('span').should('have.text', '--');
        cy.contains('span.guest-email', 'cisije@mailinator.com').should('be.visible')
        cy.get('div.small.translate').contains('Arrival Time').next().should('contains.text', '--').should('be.visible')
        cy.get('div.small.translate').contains('Access Code').next().should('contains.text', '-').should('be.visible')
        cy.get('div.small.translate').contains('Last').next().should('contains.text', ' 17 Jul 2024 12:16').should('be.visible')
        cy.get('div.small.translate').contains('Payment').next().should('contains.text', 'Credit Card').should('be.visible')
        //cy.get('a#moreMenu.btn.btn-xs.dropdown-toggle').should('exist').click()
    })
    it.only('Create a Booking', () => {
        
        cy.get('#add_booking_button').should('be.visible').and('contain.text', 'Add New Booking').click() //create booking
        cy.get('.modal-content .modal-title').should('be.visible').and('contain.text', 'Booking Details') //heading on modal
        cy.get('#assigned_property').should('be.visible').select('Waqas Property')
        sourceObj.selectOpt('Direct')
        sourceObj.reservationStatus('Confirmed')
        sourceObj.bookingAmount('40,000')
        sourceObj.accessCode('2456')
        sourceObj.confirmationCode('1234')
        sourceObj.internalNotes('The hotel must be near to Eiffel Tower')
        guestInfo.selectFn('English','Pakistani')
        guestInfo.userDetails('Muhammad','Farqleet','farqleetmuuhammad6@gmail.com','3','1')
        cy.get('button.btn.btn-sm.btn-success.px-3').click()
        cy.get('123')

})
})