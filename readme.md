# Beneflex

Projeto criado para simular algumas funcionalidade de uma conta de multi benefícios. 

O projeto conta com as seguintes funcionalidades:
    
- Transação
- Consulta de saldos
- Consulta de extrato por período

### Transação

A funcionalidade de transação tem como objetivo similar o que seria uma transação de pagamento no mundo real. Para isso, algumas informações devem ser passadas:

- Nome da loja
- Numero da conta pagadora
- MCC da compra
- Valor da transação

Como no mundo real, essa transação deve acontecer de maneira "real-time"

Um cartão multi beneficios, tem algumas categorias que podem conter saldos, em alguns casos esse saldo pode ser transferível entre os tipos ou não. Em casos onde não há saldo suficiente em uma categoria de saldo, outra categoria que se enquadre no MCC da transação poderá ser utilizado, por exemplo. 

Uma transação com MCC de mercado no valor de R$ 100,00

O saldo de Alimentação possui apenas R$ 95,00. Com isso se houver saldo disponível na categoria saldo livre, ou algum tipo de saldo transférivel, o valor restante poderá ser tirado para complementar e finalizar a transação com sucesso. 

Essa regra, deverá estar funcional no projeto. 

### Consulta de saldos

Essa será uma simples consulta de saldos por categoria de cada benefício vinculado a conta.

### Extrato por período

Nessa parte, haverá uma consulta de transações e histórico por um periodo selecionado. 
Serão permitidos os periodos de 15, 30, 45 e 90 dias. 

## Tecnologias

O projeto está sendo desenvolvido em NodeJS com Typescript e utiliza o banco de dados não relacional MongoDB. 

A escolha da linguagem foi feita por sua possibilidade de tipificação e implementação de conceitos utilizado em Programação Orientada à Objetos.

O Banco de dados foi utilizado por sua facilidade em lidar com listas e objetos dentro de um schema especifico. 

Como forma de utilização do sistema, está exposta um servidor HTTP e outro gRPC, ambos, com as mesmas funcionalidades, mas com intuito de praticar e mostrar a utilização de arquitetura hexagonal e a as possibilidades de troca usando a mesma lógica de código. 
