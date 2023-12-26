import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import loginPage from '../../../page/loginPage';
import BuscaProdutoPage from '../../../page/BuscaProdutoPage';

Given('que estou na página inicial', () => {
    loginPage.visitar();  
});

When('eu digito o nome de um produto na barra de busca', () => {
    BuscaProdutoPage.selecioarProduto('Console PlayStation 5 - Digital Edition');
});

And('clico no botão de buscar', () => {
    BuscaProdutoPage.consfirmarProduto();
});

Then('uma lista de produtos relacionados ao termo buscado é exibida', () => {
    BuscaProdutoPage.verificarProduto('Console PlayStation 5 - Digital Edition');
});