# language: pt

Funcionalidade: Login no Site de Marketplace
  Para acessar recursos exclusivos do usuário
  Como um cliente do site
  Eu quero fazer login na minha conta

  Cenário: Login válido
    Dado que estou na página de login
    Quando eu insiro credenciais válidas
    E clico no botão de login
    Então eu devo ser redirecionado para a página inicial

