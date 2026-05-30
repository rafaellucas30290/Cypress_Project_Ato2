#language: pt
Funcionalidade: Consulta de Órgãos Governamentais 

Contexto: Como usuário quero consultar os órgãos governamentais para obter informações sobre suas funções e responsabilidades.

Cenário: Consultar órgãos governamentais
  Dado que estou na página principal do site do gov
  Quando abro o menu e clico em "Órgãos do Governo"
  Então devo ser redirecionado para uma URL contendo "/orgaos-do-governo"
  E deve ser exibido um título "Órgãos do Governo"


