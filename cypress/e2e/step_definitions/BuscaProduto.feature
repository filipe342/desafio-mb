# language: pt

Funcionalidade: Busca de Produto
  Para encontrar produtos que desejo comprar
  Como um cliente do site
  Eu quero buscar por produtos

  Cenário: Buscar por um Produto Específico
    Dado que estou na página inicial
    Quando eu digito o nome de um produto na barra de busca
    E clico no botão de buscar
    Então uma lista de produtos relacionados ao termo buscado é exibida