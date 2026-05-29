import gov_page from "../pages/gov_page";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("abro o menu e clico em {string}", (link) => {
    gov_page.clicarEmOrgaos();
});
Then('deve ser exibido um título {string}', (titulo) => {
    cy.get(gov_page.elementos.tituloPagina).should('contain', titulo);
});

