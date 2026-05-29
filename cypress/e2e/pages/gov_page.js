class gov_page {
    elementos = {
        tituloPagina: '.documentFirstHeading',
        metaTitutlo: 'meta[name="title"]',
        linkOrgaos: '.menu-item a',
        botaoPesquisa: '.fa-search',
        campoPesquisa: '#searchtext-input',
        painelSugestoes: '.aa-Panel',
        listaServicos: '#searchtext-servicos-list',
        itemSugestao: '.aa-Item'

    }

    visitar(url) {
        cy.visit(url || 'https://www.gov.br');
    }

    validarSugestoesApareceram() {
    cy.get(this.elementos.painelSugestoes)
      .should('be.visible');
    }

    validarItemNaLista(textoEsperado) {
    cy.get(this.elementos.listaServicos)
      .should('contain', textoEsperado);
    }   

    clicarEmOrgaos() {
        cy.contains('a', 'Órgãos do Governo').click({ force: true });
    }

    clicarEmPesquisa() {
        cy.get(this.elementos.campoPesquisa).click();
    }

    digitarEmPesquisa(termo) {
        cy.get(this.elementos.campoPesquisa)
        .should('be.visible')
        .click({force: true})
        .type(termo, {delay: 100, force: true });
    }
    
    clicarNoLink(textoDoLink) {
        cy.contains('a', textoDoLink).should('be.visible').click();
    }
}
export default new gov_page();