
//Custom Command for clicking element
Cypress.Commands.add("clickElement", (elem) => {
    cy.get(elem).should('exist').should('be.visible').click();
  });
  
  //Custom Command for typing in text field
  Cypress.Commands.add("typeInTextField", (field, value) => {
    cy.get(field).should('exist').and('be.visible').type(value);
  });


  //Custom Command for leaving an input field blank
  Cypress.Commands.add("blankField", (field) => {
    cy.get(field).should('be.empty').and('be.visible');
  });

  //Custom Command for verifying text on a page
  Cypress.Commands.add('seePage', (field, value) => {
    cy.get(field).should('exist').and('be.visible').should('contain', value)
  })

  Cypress.Commands.add('verifyPage', (field) => {
    cy.get(field).should('be.visible')
  })

 
  Cypress.Commands.add('clickFirstItem', (item, elem) => {
    cy.get(item).first().click();
  });

  Cypress.Commands.add('checkEmptyState', (item, elem) => {
    cy.get(item).should('not.contain', elem)
  });


  Cypress.Commands.add('checkLength', (item, val) => {
    cy.get(item).should('have.length', val)
  });
  

//Custom Command for selecting dropdown options
Cypress.Commands.add("selectDropdown", (elem, value) => {
  cy.get(elem)
    .should('exist')
    .should('be.visible')
    .should('not.be.disabled') 
    .select(value); 
});

  

//   Cypress.Commands.add("toggleProdStatus",
//     (prodStatusSelector,
// addProd,
// removeProd
//     ) => {
//       cy.get(prodStatusSelector).invoke('text').then((status) => {
//         const trimmedStatus = status.trim()
//         cy.log('Product added', trimmedStatus)

//         cy.get(addProd).click()
//         cy.get(removeProd).click()
//       })
//     }
//   )

Cypress.Commands.add('verifyPriceSorting', (selector, order = 'asc') => {
  cy.get(selector)
    .then(($prices) => {
      const priceArray = $prices
        .map((index, el) => parseFloat(el.innerText.replace('$', '').trim())) // Convert text to number
        .get();

      // Determine sorting order
      const sortedArray = order === 'asc' ? [...priceArray].sort((a, b) => a - b) : [...priceArray].sort((a, b) => b - a);

      // Assert that the prices are correctly sorted
      expect(priceArray).to.deep.equal(sortedArray);
    });
});

Cypress.Commands.add('verifyNameSorting', (selector, order = 'asc') => {
  cy.get(selector)
    .then(($items) => {
      const nameArray = $items.map((index, el) => el.innerText.trim()).get();

      // Determine sorting order
      const sortedArray = order === 'asc' ? [...nameArray].sort() : [...nameArray].sort().reverse();

      // Assert that the names are correctly sorted
      expect(nameArray).to.deep.equal(sortedArray);
    });
});
