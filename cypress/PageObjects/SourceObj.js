export class SourceObj{
selectOpt(enterText){
cy.get('.col-md-6 label[for="booking_source"]').should('contain.text', 'Booking Source').and('be.visible')
cy.get('#booking_source').select(enterText).should('contain.text',enterText).and('be.visible')
}  
reservationStatus(enterText){
cy.get('#reservation_status').select(enterText).should('contain.text',enterText).and('be.visible')
}
bookingAmount(enterText){
cy.get('#total_booking_amount').should('have.attr','placeholder','Total booking amount').and('be.visible') 
cy.get('#total_booking_amount').type(enterText).should('exist').and('be.visible')
}
accessCode(enterText){
cy.get('#booking_access_code').should('have.attr','placeholder','Add access code for this reservation').and('be.visible')
cy.get('#booking_access_code').type(enterText).should('exist').and('be.visible')
}
confirmationCode(enterText){
cy.get('#booking_confirmation_code').should('have.attr','placeholder','Reservation confirmation code').and('be.visible')
cy.get('#booking_confirmation_code').type(enterText).should('exist').and('be.visible')
}
internalNotes(enterText){
cy.get('#bookingNotes').should('have.attr','placeholder','Internal notes').and('be.visible')
cy.get('#bookingNotes').type(enterText).should('exist').and('be.visible')
}
}