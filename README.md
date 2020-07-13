# Markdown Links

## Índice

* [1. Prefácio](#1-prefácio)
* [2. Instalação](#2-instalação)
* [3. Uso](#3-Uso)
* [4. Implementações Futuras](#4-implementações-futuras)

***

## 1. Prefácio

Essa é uma biblioteca criada para ler arquivos Markdown e encontrar os links que neles existem, trazendo todos em formato de lista juntamente com seu nome e o arquivo de onde estão localizados.

## 2. Instalação

Para utilizar essa biblioteca, primeiramente faça um clone deste repositório.

* Para instalar globalmente via terminal, rode o seguinte comando:

`npm install -g larissamiyaji/SAP004-md-links`

## 3. Uso

Para utilizar a biblioteca basta rodar no terminal o seguinte comando:

`md-links [nome-do-arquivo-md]`

Por exemplo: `md-links teste.md`

O resultado trazido virá em formato de lista com 3 tópicos cada(`Nome, Link e Documento`), como mostrado a seguir:

<img src="Images\mdlinks demonstração.gif" width="480" height="257" frameBorder="0" class="giphy-embed"/>

### 4. Implementações Futuras

Futuramente, pretendo implementar a validação dos links e o stats para saber se os links ainda são válidos.