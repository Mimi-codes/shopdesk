const { faker } = require("@faker-js/faker");
let data;

before("", () => {
  cy.fixture("sign_in.json").then((elem) => {
    data = elem;
  });
});

Cypress.Commands.add('validLogin', () => {
  cy.clickElement(data.sign_in_btn)
  cy.seePage(data.sign_in_field, data.sign_in_val)
  cy.wait(2000)
  cy.typeInTextField(data.email_field, data.email_val)
  cy.typeInTextField(data.password_field, data.password_val)
  cy.clickElement(data.submit_btn)
  cy.wait(2000)
  cy.seePage(data.org_page, data.org_val)
})

Cypress.Commands.add('blankLogin', () => {
  cy.clickElement(data.sign_in_btn)
  cy.seePage(data.sign_in_field, data.sign_in_val)
  cy.wait(2000)
  cy.clickElement(data.submit_btn)
  cy.seePage(data.email_error_field, data.email_error_val)
  cy.seePage(data.pass_error_field, data.pass_error_val)
  cy.seePage(data.form_error_field, data.form_error_val)
})

Cypress.Commands.add('blankEmail', () => {
  cy.clickElement(data.sign_in_btn)
  cy.seePage(data.sign_in_field, data.sign_in_val)
  cy.wait(2000)
  cy.typeInTextField(data.password_field, data.password_val)
  cy.clickElement(data.submit_btn)
  cy.seePage(data.email_error_field, data.email_error_val)
})

Cypress.Commands.add('blankPassword', () => {
  cy.clickElement(data.sign_in_btn)
  cy.seePage(data.sign_in_field, data.sign_in_val)
  cy.wait(2000)
  cy.typeInTextField(data.email_field, data.email_val)
  cy.clickElement(data.submit_btn)
  cy.seePage(data.pass_error_field, data.pass_error_val)
})


Cypress.Commands.add('nonExistentEmail', () => {
  cy.clickElement(data.sign_in_btn)
  cy.seePage(data.sign_in_field, data.sign_in_val)
  cy.wait(2000)
  cy.typeInTextField(data.email_field, 'mandilas@yopmail.com')
  cy.typeInTextField(data.password_field, data.password_val)
  cy.clickElement(data.submit_btn)
  cy.seePage(data.nonexistent_err_field, data.nonexistent_err_val)
})

Cypress.Commands.add('invalidEmail', () => {
  cy.clickElement(data.sign_in_btn)
  cy.seePage(data.sign_in_field, data.sign_in_val)
  cy.wait(2000)
  cy.typeInTextField(data.email_field, data.invalid_email)
  cy.typeInTextField(data.password_field, data.password_val)
  cy.clickElement(data.submit_btn)
  cy.seePage(data.nonexistent_err_field, data.nonexistent_err_val)
})