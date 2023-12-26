import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import loginPage from '../../../page/loginPage';
import BuscaProdutoPage from '../../../page/BuscaProdutoPage';
import AdicionarProdutoCarrinhoPage from '../../../page/AdicionarProdutoCarrinhoPage';

Given("que encontrei um produto que desejo comprar", () => {
    loginPage.visitar();  
    BuscaProdutoPage.selecioarProduto('Console PlayStation 5 - Digital Edition');
    BuscaProdutoPage.consfirmarProduto();
    BuscaProdutoPage.verificarProduto('Console PlayStation 5 - Digital Edition');
});

When("eu clico no botão de Adicionar ao Carrinho", () => {
    AdicionarProdutoCarrinhoPage.clickProduto();
    AdicionarProdutoCarrinhoPage.clickAdicionarAoCarrinho();
});

Then("o produto é adicionado ao meu carrinho", () => {
    AdicionarProdutoCarrinhoPage.verificarAdicionadoAoCarrinho('Adicionado ao carrinho');
});

And("vejo uma mensagem confirmando a adição", () => {
    AdicionarProdutoCarrinhoPage.clickContinuarCarrinho();
    AdicionarProdutoCarrinhoPage.verificarProdutoNoCarrinho('Console PlayStation 5 - Digital Edition');
});