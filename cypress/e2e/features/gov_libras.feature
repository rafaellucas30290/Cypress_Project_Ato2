#language: pt
Funcionalidade: Validar se a função de Libras está funcionando corretamente

Contexto: Como usuário, quero utilizar a função de Libras no site do gov para garantir que o conteúdo seja acessível para pessoas com deficiência auditiva.

Cenário: Validar função de Libras
  Dado que estou na página principal do site do gov
  Quando clico no botão do VLibras
  Então o widget deve carregar e exibir a tradução