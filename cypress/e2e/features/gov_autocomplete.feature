#language: pt
Funcionalidade: Validar sugestões de pesquisa

Contexto: Como usário, quero validar que a funcionalidade de autocomplete na barra de pesquisa do site do gov está funcionando corretamente, exibindo sugestões relevantes à medida que digito.

Cenário: Validar sugestões de pesquisa
  Dado que estou na página principal do site do gov
  Quando digito "Carteira" na barra de pesquisa
  Então devo ver sugestões de pesquisa relacionadas
  E a lista deve conter a opção com "Carteira"

