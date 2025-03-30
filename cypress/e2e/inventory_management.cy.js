//ADD AND REMOVE JOURNEY

describe('', () => {
    it('Create stock', () => {
      cy.createStock()
    })
  
    it('Create stock with blank data', () => {
    cy.blankFields()  
    })

    xit('Edit stock value', () => {
      cy.editValue()  
      })
  })