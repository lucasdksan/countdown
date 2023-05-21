# APP COUNTDOWN ⏲

<!-- DOCS-IGNORE:start -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- DOCS-IGNORE:end -->

O componente React consiste em um timer interno que decrementa a cada segundo, atualizando o tempo exibido na prateleira. Ele pode ser configurado para receber uma data de término como propriedade, permitindo que seja facilmente reutilizado para diferentes eventos.

Além disso, o componente React pode ser estilizado de acordo com as necessidades de design da prateleira de e-commerce. Isso inclui a definição de estilos para a div que contém o tempo total do countdown, bem como a personalização de cores, fontes e outros elementos visuais para garantir uma experiência esteticamente agradável e coerente com o restante do site.

Observação: O componente não está estilizado.

![Media Placeholder](../github/Front.png)

## Configuration 

1. Crie uma tabela no master data com o Acrônimo `CD` e nome Countdown, além disso criar os campos listados na tabela abaixo.
2. Adicionando o aplicativo como uma dependência de tema no arquivo manifest.json;
3. Declarar o "countdown" nas prateleiras.
4. Declarar o "countdown--pdp" na página de produto.

### `Campos` da tabela

| Camp         | Type            | Description                                                                                                             | Display Name    |
| ------------ | --------------- | ----------------------------------------------------------------------------------------------------------------------- | --------------- | 
| `active`     | `boolean`       | Responsavel por ativar o countdown do produto.                                                                          | `ativo?`        |
| `duration`   | `Varchar 100`   | Campo para colocar o tempo da contagem regressiva. Obs: padrão "00:00:00" onde é dividio em hora, minuto e segundo.     | `Duração`       |
| `finalDate`  | `Varchar 100`   | Campo para colocar a data final de funcionamento.                                                                       | `Data Final`    |
| `initialDate`| `Varchar 100`   | Campo para colocar a data inical de funcionamento.                                                                      | `Data Inicial`  |
| `productId`  | `Varchar 100`   | O id do produto que vai receber o countdown.                                                                            | `Id do Produto` |


## Description

* countdown:

Este componente tem a responsabilidade de criar uma contagem regressiva para um produto registrado no master data. A contagem regressiva é armazenada no localStorage, permitindo que ela seja mantida mesmo quando o usuário navega entre as páginas da loja. Esse componente deve ser aplicado aos produtos exibidos nas prateleiras.

Para que esse componente seja renderizado, é necessário que o produto esteja registrado no master data. Além disso, o componente realiza algumas validações antes de exibir a contagem regressiva, como por exemplo:

-> Verificar se o produto está ativo.
-> Verificar se a data atual está dentro do intervalo de funcionamento.
-> Verificar se o ID do produto está registrado no master data.

*countdown--pdp:

Este componente deve ser implementado na página de produtos e possui todas as características padrão de um countdown. Ele é responsável por exibir uma contagem regressiva que pode ser aplicada aos produtos, adicionando um senso de urgência e destacando ofertas especiais ou prazos limitados.

## Customization

`Para aplicar personalizações de CSS neste e em outros blocos, siga as instruções fornecidas na receita em [Usando CSS Handles para personalização da loja](https://vtex.io/docs/recipes/style/using-css-handles-for -store-personalização).`

As classes deste componente que permitem customização estão listadas na tabela abaixo: 

| CSS Handles |  description |
| ----------- |  ----------- | 
| `countdown__body` | `Classe para personalizar o visual do contador regressivo, permitindo a modificação do 'corpo'. Isso possibilita a alteração do background-color e outros elementos visuais.` |
| `countdown__text` | `Classe para modificar as propriedades da frase "Termina em". Obs: Lembrando que a frase está dentro de um elemento p` |
| `countdown__dates` | `Classe da Div que contém o tempo total da contagem regressiva.` |
| `countdown__date` | `Classe para personalizar os tempo (horas, minutos e segundos)` |
| `countdown__dots` | `Classe para customizar o ":" que divide o tempo entre horas, minutos e segundos` |
