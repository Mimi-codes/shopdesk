import { faker } from "@faker-js/faker";
let data;

before("", () => {
  cy.fixture("inventory.json").then((elem) => {
    data = elem;
  });
});


Cypress.Commands.add('createStock', () => {
  cy.validLogin()
  cy.clickElement(data.org_btn)
  cy.wait(2000)
  cy.clickElement(data.add_stock)
  cy.wait(2000)
  cy.typeInTextField(data.item_name_field, faker.person.firstName())
  cy.typeInTextField(data.selling_price, faker.phone.number("###"))
  cy.typeInTextField(data.cost_price,faker.phone.number("###"))
  cy.typeInTextField(data.quantity, faker.phone.number("#"))
  cy.clickElement(data.add_stock_btn)
  cy.wait(2000)
})

Cypress.Commands.add('blankFields', () => {
  cy.validLogin()
  cy.clickElement(data.org_btn)
  cy.wait(2000)
  cy.clickElement(data.add_stock)
  cy.wait(2000)
  cy.clickElement(data.add_stock_btn)
  cy.seePage(data.prod_name_err_field, data.prod_name_err_msg)
  cy.seePage(data.sell_price_err_field, data.sell_price_err_msg)
  cy.seePage(data.cost_price_err_field, data.cost_price_err_msg)
})


// Cypress.Commands.add('editValue', () => {
//   cy.validLogin()
//   cy.clickElement(data.org_btn)
//   cy.wait(2000)
//   cy.clickElement(data.hamburger_btn)
//   // cy.clickElement(data.edit_btn)
//   // cy.typeInTextField(data.edit_input_field, '50')
//   // cy.clickElement(data.add_stock_btn)
// })