import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import gov_page from "../pages/gov_page";


When('clico no botão do VLibras', () => {
    gov_page.clicarNoLibras();
});

Then('o widget deve carregar e exibir a tradução', () => {
    gov_page.validarVLibrasVisivel();
});