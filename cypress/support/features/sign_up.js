import { faker } from "@faker-js/faker";
let data;

const fakePhone = `8135${faker.string.numeric(6)}`
before("", () => {
  cy.fixture("sign_up.json").then((elem) => {
    data = elem;
  });
});

Cypress.Commands.add('validDetails', () => {
cy.clickElement(data.start_btn)
cy.wait(3000)
cy.seePage(data.sign_up_field, data.sign_up_text)
cy.typeInTextField(data.first_name_field, faker.person.firstName())
cy.typeInTextField(data.last_name_field, faker.person.lastName())
cy.typeInTextField(data.email_field, faker.internet.email({provider: "yopmail.com"}))
cy.typeInTextField(data.password_field, 'TestAcct@123')
cy.typeInTextField(data.con_password_field, 'TestAcct@123')
cy.clickElement(data.phone_dropdown, '0')
cy.typeInTextField(data.phone_field, fakePhone)
cy.clickElement(data.sign_up_btn)
cy.wait(2000)
cy.clickElement(data.close_btn)
// cy.seePage(data.sign_up_modal, data.sign_up_mssg)
// cy.clickElement(data.done_btn)
})

Cypress.Commands.add('existingPhone', () => {
  cy.clickElement(data.start_btn)
  cy.wait(3000)
  cy.seePage(data.sign_up_field, data.sign_up_text)
  cy.typeInTextField(data.first_name_field, faker.person.firstName())
  cy.typeInTextField(data.last_name_field, faker.person.lastName())
  cy.typeInTextField(data.email_field, faker.internet.email({provider: "yopmail.com"}))
  cy.typeInTextField(data.password_field, 'TestAcct@123')
  cy.typeInTextField(data.con_password_field, 'TestAcct@123')
  cy.clickElement(data.phone_dropdown, '0')
  cy.typeInTextField(data.phone_field, "8135246790")
  cy.clickElement(data.sign_up_btn)
  cy.wait(2000)
  cy.seePage(data.phone_err_field, data.existing_phone_error)
  })

  Cypress.Commands.add('existingEmail', () => {
    cy.clickElement(data.start_btn)
    cy.wait(3000)
    cy.seePage(data.sign_up_field, data.sign_up_text)
    cy.typeInTextField(data.first_name_field, faker.person.firstName())
    cy.typeInTextField(data.last_name_field, faker.person.lastName())
    cy.typeInTextField(data.email_field, 'zoe@yopmail.com')
    cy.typeInTextField(data.password_field, 'TestAcct@123')
    cy.typeInTextField(data.con_password_field, 'TestAcct@123')
    cy.clickElement(data.phone_dropdown, '0')
    cy.typeInTextField(data.phone_field, "8135246791")
    cy.clickElement(data.sign_up_btn)
    cy.wait(2000)
    cy.seePage(data.email_error_field, data.existing_email_error)
    })

Cypress.Commands.add('blankDetails', () => {
  cy.clickElement(data.start_btn)
  cy.wait(3000)
  cy.clickElement(data.sign_up_btn)
  cy.seePage(data.fname_err_field, data.fname_err_val)
  cy.seePage(data.lname_err_field, data.lname_err_val)
  cy.seePage(data.email_err_field, data.email_err_val)
  cy.seePage(data.pass_err_field, data.pass_err_val)
  cy.seePage(data.con_pass_err_field, data.con_pass_err_val)
  cy.seePage(data.phone_err_field, data.phone_err_val)
  })
  
