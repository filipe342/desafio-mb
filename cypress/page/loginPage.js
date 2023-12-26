class LoginPage {
    visitar() {
        cy.visit('/');
    }

    preencherEmail(email) {
        cy.get('#ap_email').type(email);
    }

    clicarContinuar() {
        cy.get('#continue').click();
    }

    preencherSenha(senha) {
        cy.get('#ap_password').type(senha);
    }

    clicarFazerLogin() {
        cy.get('#signInSubmit').click();
    }

    verificarUsuarioLogado(nomeUsuario) {
        cy.get('#nav-link-accountList-nav-line-1').should('contain', nomeUsuario);
        /* cy.screenshot('loginEfetuado'); */
    }

    clicarEntrar() {
        cy.get('#nav-link-accountList').click();
    }
}

export default new LoginPage;
