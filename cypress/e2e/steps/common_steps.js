import {Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import gov_page from "../pages/gov_page";

Given("que estou na página principal do site do gov", () => {
    gov_page.visitar();
});

Then('devo ser redirecionado para uma URL contendo {string}', (fragURL) => {
    cy.url().should('include', fragURL);
});

When("clico no link ou botão {string}", (link) => {
    gov_page.clicarNoLink(link);
});
