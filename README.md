## This is an automated test repository on saucedemo


#### Test site "https://www.saucedemo.com/" 
### All configurations have been set up in the config file

#### The project covers test for the following features using cypress Page Object Model for easy structuring in a maintainable and scalable way and each features were tested separately(in a separate file) for easy readability:

* Login to the application using these credentials:
{Username - problem_user , Password - secret_sauce}
{Username - standard_user , Password - secret_sauce}
* Add and remove products from cart
* Filter by all possible options
* View Cart
* Checkout


##### The dependencies/libraries used are:
* Cypress
* Faker.js (to generate random/fake test data)
* Mochawesome Reporter (to document the test report)

#### Steps to execute test scripts
 Below are the steps to set up and execute the test script:
 * Clone the repository 
 * Install the required dependencies by running the command: npm install
 * Create a cypress.env.json file and add the login details
 * Run the test script using the command: npx cypress open --e2e to load the cypress runner and execute test
 * Run the command: npx cypress run to generate the report
 * The test report will be generated in the "cypress/reports" directory.


### Notes
##### Prerequisites
 * Run node -v to check Node.js version (install if not alrady installed)
 Then, navigate to the project root folder to: 
 * Run npm init -y to initialize the project as a Node.js project 
 * Run npm install cypress --save-dev to install cypress as a dev dependency
 * Run npm install @faker-js/faker --save-dev to install faker.js as a dev dependency
 * Run npm install cypress-mochawesome-reporter to install as a dependency
 * Run npx cypress open --e2e to open the Cypress test runner and execute the test scripts 
 * Run npx cypress run to generate report
