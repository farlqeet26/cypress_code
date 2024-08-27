import {InputField} from '../PageObjects/InputField'
const inputField= new InputField()
export class Signin {
    visitLoginUrl(){
        cy.visit('https://master.chargeautomation.com/login')
    }
    successfullLogin() {
    cy.url().should('include', '/v2/dashboard')
    cy.get('h1').contains('Welcome Waqas')
    }

    }