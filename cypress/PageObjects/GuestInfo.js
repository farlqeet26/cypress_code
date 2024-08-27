

export class GuestInfo{
    userDetails(fName,lName,/*phoneNo*/email,adults,children){
    cy.get('#first_name').should('have.attr','placeholder','First name').and('be.visible')
    cy.get('#first_name').type(fName).should('exist').and('be.visible')
    cy.get('#last_name').should('have.attr','placeholder','Last name').and('be.visible')
    cy.get('#last_name').type(lName).should('exist').and('be.visible')
    cy.get('#email').should('have.attr','placeholder','Email').and('be.visible')
    cy.get('#email').type(email).should('exist').and('be.visible')
    cy.get('#num_adults').should('exist').and('be.visible')
    cy.get('#num_adults').type(adults).should('exist').and('be.visible')
    cy.get('#num_child').should('exist').and('be.visible')
    cy.get('#num_child').type(children).should('exist').and('be.visible')
    }
    selectFn(slctLang,slctNationality){
    cy.get('#language_code').select(slctLang).should('contain.text',slctLang).and('be.visible')
    cy.get('#nationality').select(slctNationality).should('contain.text',slctNationality).and('be.visible')
    cy.get('button[name="Save Changes"]').should('be.visible') 
  }
}