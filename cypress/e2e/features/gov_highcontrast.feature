#language: pt
Funcionalidade: Validar se a função de alto contraste está funcionando corretamente

Contexto: Como usuário, quero validar que a função de alto contraste no site do gov está funcionando corretamente, garantindo que as cores sejam alteradas para melhorar a legibilidade.

Cenário: Validar função de alto contraste
  Quando ativo a função de alto contraste
  Então as cores do site devem ser alteradas para um esquema de alto contraste
 