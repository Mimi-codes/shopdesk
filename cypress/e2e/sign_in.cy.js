//LOGIN JOURNEY

describe('Login Journey', () => {
  it('Login with valid details', () => {
  cy.validLogin() 
  })

  it('Login with blank details', () => {
   cy.blankLogin()
  })

  it('Login with blank email', () => {
    cy.blankEmail()
  })

  
  it('Login with blank password', () => {
    cy.blankPassword()
  })

  
  it('Login with non-existent email', () => {
    cy.nonExistentEmail()
  })

  it('Login with invalid email', () => {
    cy.invalidEmail()
  })
   
})