class gov_page {
    elementos = {
        tituloPagina: '.documentFirstHeading',
        metaTitutlo: 'meta[name="title"]',
        linkOrgaos: '.menu-item a',
        botaoPesquisa: '.fa-search',
        campoPesquisa: '#searchtext-input',
        painelSugestoes: '.aa-Panel',
        listaServicos: '#searchtext-servicos-list',
        itemSugestao: '.aa-Item',
        botaoAltoContraste: 'button[aria-label="Alto contraste"]',
        body: 'body',
        Libras: '.vp-access-button'
    }

    visitar(url) {
        cy.visit(url || 'https://www.gov.br');
    }
    clicarNoLibras() {
        cy.get(this.elementos.Libras).should('be.visible').click();
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

    ativarAltoContraste () {
        cy.get(this.elementos.botaoAltoContraste, { includeShadowDom: true })
        .should('be.visible')
        .click( { force: true });
    }

    validarAltoContraste () {
        cy.get(this.elementos.body).should('have.class', 'contraste');
    }
    validarVLibrasVisivel() {
    cy.get('#\\#canvas', { timeout: 15000 }) // Aumentamos o timeout porque widgets externos demoram
      .should('be.visible');
}
    
}
export default new gov_page();