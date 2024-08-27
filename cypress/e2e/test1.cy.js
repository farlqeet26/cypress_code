describe('Website Test Cases', () => {
  it('', () => {
   const link= 'https://master.chargeautomation.com/downloadable-booking-details-page/106970?signature=cc97c6027a38091dcb178c46adbb223ee8c02c91bc0beac9988c965ea6e43e89'
    cy.visit(link,{
      onBeforeLoad(win){
        cy.stub(win,'print')
      }
    })
   cy.visit('https://master.chargeautomation.com/downloadable-booking-details-page/106970?signature=cc97c6027a38091dcb178c46adbb223ee8c02c91bc0beac9988c965ea6e43e89')
    cy.contains('Welcome Mia Jackson').should('exist')
    cy.get('img').and('have.attr', 'src','https://chargeautomationlocal.nyc3.digitaloceanspaces.com/storage/uploads/property_logos/no_image.png').should('be.visible')
    //cy.get('.heading').should('have.text','BOOKING DETAILS').should('exist');
})})