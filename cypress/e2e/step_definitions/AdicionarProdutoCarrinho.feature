# language: pt

Funcionalidade: Adicionar Produto ao Carrinho
  Para comprar produtos no site
  Como um cliente
  Eu quero adicionar produtos ao meu carrinho de compras

  Cenário: Adicionar um Produto ao Carrinho com Sucesso
    Dado que encontrei um produto que desejo comprar
    Quando eu clico no botão de Adicionar ao Carrinho
    Então o produto é adicionado ao meu carrinho
    E vejo uma mensagem confirmando a adição