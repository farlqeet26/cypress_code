
import { Signin } from '../PageObjects/Signin'
const signin = new Signin
import{InputField} from '../PageObjects/InputField'
const inputField= new InputField()

describe('First test case', () => {
  it('User logs in successfully ', () => {
  cy.navigation()
  signin.visitLoginUrl()
  inputField.inputCredentials('waqasmanual@mailinator.com','Boring321') 
  signin.successfullLogin()
  })

  it('Error Messsage, Invalid email but correct password', () => {
  cy.navigation()
  signin.visitLoginUrl()
  inputField.inputCredentials('farqleet123@gmail.com','Boring321')
  cy.get('span').contains('These credentials do not match our records')
  })


  it('gives an error message, valid email but invalid password', () => {
  cy.navigation()
  signin.visitLoginUrl() 
  inputField.inputCredentials('waqasmanual@mailinator.com','Boring334')  
  cy.get('span').contains('These credentials do not match our records')
  })

  it('gives an error message, invalid email and password', () => {
  cy.navigation()
  signin.visitLoginUrl()
  inputField.inputCredentials('waqasmanual@mailainator.com','Boring334')  
  cy.get('span').contains('These credentials do not match our records')
  })
})

