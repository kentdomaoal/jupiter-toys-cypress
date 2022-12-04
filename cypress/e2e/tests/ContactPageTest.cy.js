/// <reference types="cypress" />

import { Utility } from "../../support/utility";
import { ContactPage } from "../pages/ContactPage";

describe('Jupiter Toys Contact Page Tests', () => {

  beforeEach(() => {
    // Visit baseURL at the start of all tests.
    // Already configured in cypress.config.js
    cy.visit("/");

    // read test data
    let util = new Utility();
    cy.fixture(util.getFilename('userFeedback')).as('userFeedback');
  })

  it('Navigates to Contact Page and validate error messages for mandatory fields', function() {

    // Go to Contact page.
    // By instantiating ContactPage object it will navigate to Contact Page.
    // see ContactPage constructor
    let page = new ContactPage();
    
    //Click submit button
    page.clickButton('Submit');

    //Validate alert error message
    page.alertErrorMessage.should('contain', page.ERROR_MESSAGE);
    
    //Validate error messages on mandatory fields
    page.forenameErrorMessage.should('contain',page.errorMessageFor('Forename'));
    page.emailErrorMessage.should('contain',page.errorMessageFor('Email'));
    page.messageErrorMessage.should('contain',page.errorMessageFor('Message'));

    //Populate mandatory fields
    page.enterForename(this.userFeedback.Forename);
    page.enterEmail(this.userFeedback.Email);
    page.enterMessage(this.userFeedback.Message);

    //Validate errors are gone
    page.alertErrorMessage.should('not.exist');
    page.forenameErrorMessage.should('not.exist');
    page.emailErrorMessage.should('not.exist');
    page.messageErrorMessage.should('not.exist');
  })

  Cypress._.times(2, function() {
    it('Navigates to Contact Page and validate successful submission', function() {

      // Go to contact page
      // by instantiating ContactPage object it will navigate to Contact Page
      // see ContactPage constructor
      let page = new ContactPage();

      //Populate mandatory fields
      page.enterForename(this.userFeedback.Forename);
      page.enterEmail(this.userFeedback.Email);
      page.enterMessage(this.userFeedback.Message);

      //Click submit button
      page.clickButton('Submit');

      //Wait for successful message to appear
      page.alertSuccessMessage
        .should('be.visible')
        .and('contain', page.successMessageForUser(this.userFeedback.Forename));
    })
  })
})