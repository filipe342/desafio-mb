class AdicionarProdutoCarrinhoPage {
    clickProduto() {
        cy.get('[class="a-size-base-plus a-color-base a-text-normal"]').contains('Console PlayStation 5 - Digital Edition').click();
    }

    clickAdicionarAoCarrinho() {
        cy.get('#add-to-cart-button').click();
    }

    verificarAdicionadoAoCarrinho(produto) {
        cy.get('.a-size-medium-plus').should('contain', produto);
    }

    clickContinuarCarrinho() {
        cy.get('#sw-gtc > .a-button-inner > .a-button-text').click();
    }

    verificarProdutoNoCarrinho(produto) {
        cy.get('.a-grid-vertical-align > :nth-child(2)').should('contain', produto);
    }
}

export default new AdicionarProdutoCarrinhoPage();