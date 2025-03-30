//SIGN UP JOURNEY

describe('Sign Up Journey', () => {
    it('Sign up with valid details', () => {
     cy.validDetails()
    })
  
    it('Sign up with blank data', () => {
    cy.blankDetails() 
    })

    it('Sign up with existing email', () => {
      cy.existingEmail() 
      })

    it('Sign up with existing phone', () => {
        cy.existingPhone() 
        })

     
  })