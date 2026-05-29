import {When, Then, Given} from "@badeball/cypress-cucumber-preprocessor";
import gov_pages from "../pages/gov_page";

When("ativo a função de alto contraste", () => {
    gov_pages.ativarAltoContraste();
});

Then("as cores do site devem ser alteradas para um esquema de alto contraste", () => {
    gov_pages.validarAltoContraste();
});