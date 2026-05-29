import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import gov_page from "../pages/gov_page";



When("digito {string} na barra de pesquisa", (termo) => {
    gov_page.digitarEmPesquisa(termo);
});

Then("devo ver sugestões de pesquisa relacionadas", () => {
    gov_page.validarSugestoesApareceram();
});

Then("a lista deve conter a opção com {string}", (opcao) => {
    gov_page.validarItemNaLista(opcao);
});
