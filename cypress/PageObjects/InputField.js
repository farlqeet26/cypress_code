
export class InputField{

inputCredentials(email,password){
cy.get('h2').contains('Log In').next('p').should('have.text', 'Welcome back to ChargeAutomation').and('be.visible')
cy.get('h4').contains('Online Check-in').next('p').should('contain.text', 'Guest check-in should be smooth & flawless').and('be.visible')
cy.get(':nth-child(2) > .left-cnt > h4').contains('Payment Automation').next('p').should('contain.text', 'Payment collection should be frictionless for guests & seamless for hoteliers.').and('be.visible')
cy.get('.inner-left > :nth-child(3)').contains('Chargeback Protection').next('p').should('contain.text', 'Never worry about fraudulent').and('be.visible')
cy.get('p.form-footer-link').contains('Do not have an account yet?').should('be.visible')
cy.get('a[href="/register"]').should('be.visible').and('contain.text', 'Sign Up');
cy.get('label.ccnt.remember-login').should('exist').and('be.visible')
cy.get('input[name="email"]').should('exist').and('be.visible').type(email)
cy.get('input[name="password"]').should('exist').and('be.visible').type(password)
cy.get('#loginbtn').should('exist').and('be.visible').click()
}
}
