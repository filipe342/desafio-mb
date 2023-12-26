class BuscaProdutoPage {

    selecioarProduto(produto) {
        cy.get('#twotabsearchtextbox').type(produto);
    }

    consfirmarProduto() {
        cy.get('#nav-search-submit-button').click();
    }

    verificarProduto(produto) {
        cy.get('.a-color-state.a-text-bold').should('contain', produto);
    }
}

export default new BuscaProdutoPage;