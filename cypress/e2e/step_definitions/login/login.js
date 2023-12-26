import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import loginPage from '../../../page/loginPage';

Given('que estou na página de login', () => {
  loginPage.visitar();
})

When('eu insiro credenciais válidas', () => {
  loginPage.clicarEntrar();
  loginPage.preencherEmail('at431108amazon@gmail.com');
  loginPage.clicarContinuar();
  loginPage.preencherSenha('|ZSoy3U.25!9');
})

And('clico no botão de login', () => {
  loginPage.clicarFazerLogin();
})

Then('eu devo ser redirecionado para a página inicial', () => {
  loginPage.verificarUsuarioLogado('Olá, Filipe');
})