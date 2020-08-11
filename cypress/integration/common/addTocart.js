import { Then, Given, When, when, and, And } from 'cypress-cucumber-preprocessor/steps'

const data = require('../../fixtures/seed_data/data_seed.json');
const testData = require('../../fixtures/seed_data/dataFromCsv.json');


const searchButton = '.jss35 > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root';
const searchField = '.MuiInputBase-input';
const suggestionCHild = 'ul > :nth-child(3)';
const suggestion = 'CESSI DINING CHAIR';
const pdp = ':nth-child(1) > [data-test=product] > :nth-child(3) > .css-6iq64g > .primary-image > img';
const addTocartButton = '#addToCart';


 


Given('prepare for data', () => {

  testData.forEach(el => {
    
    const datatest = {
      data : el
    
    };
    cy.log(datatest);
  

Given('I go to Web fabelio', () => {


  cy.visit(Cypress.env('FABELIO_URL'))
    
      Cypress.on('uncaught:exception', (err, runnable) => {
          // returning false here prevents Cypress from
          // failing the test
          return false
        })  
    })

    When('I click search button', () => {
      cy.get(searchButton).click();
     
    })

    And('I Input sku', () => {
      cy.get(searchField).type(data.sku)


       
       
      })

    And('I waited suggestion shown', () => {
        cy.wait(500);
         
        })

    And('I search that sku', function() {
        cy.contains(suggestion).click();
      })

      And('I waited result shown', () => {
        cy.wait(500);
         
        })

      And('I go to product detail page', function() {
        cy.get(pdp).click();
      })

      And('I add to cart', function() {
        cy.get(addTocartButton).click();
      })

    })

    })


     
