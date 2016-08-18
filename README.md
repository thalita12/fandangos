# fandangos :thumbsup:

Projeto exemplo de como utilizar o padrão SMACSS e o componente Lego.

-----

## Índice de conteúdo

* [Pré-requisitos](#pr%C3%A9-requisitos "Pré-requisitos para a execução deste projeto")
* [Instalação](#instala%C3%A7%C3%A3o "Como instalar o projeto")
* [Construção](#constru%C3%A7%C3%A3o "Como construir o projeto")
    * [Gerar CSS compilado](#gerar-css-compilado "Compilar LESS")
    * [Construção completa](#constru%C3%A7%C3%A3o-completa "Construção completa")
* [Como usar](#como-usar "Como utilizar o projeto")
* [Notas de release](#notas-de-release "Notas de release do projeto")
* [Issues](#issues "Issues do projeto")
* [Licença](#licen%C3%A7a "Licença")

-----

## Pré-requisitos

Para rodar o projeto, você deve ter instalado:

* __Node.js__ (Versão mínima 0.12) - [Download](https://nodejs.org/en/download/)
* __Bower__ - `$ npm install bower -g`
* __Grunt__ - `$ npm install grunt-cli -g`
* __Git__ (Versão mínima LTS ou Stable) - [Download](https://git-scm.com/downloads)

Atenção, caso sua rede esteja bloqueando o protocolo git, utilize o comando:

```bash
$ git config --global url."https://".insteadOf git://
```

-----

## Instalação

Faça o clone do projeto em algum diretório:

```shell
$ git clone https://github.com/thalita12/fandangos.git
```

Na pasta do projeto `fandangos` execute os comandos
```shell
$ npm install
$ bower install
```

-----

## Construção

Durante a construção da aplicação são realizadas diversas tarefas tais como:

- Limpeza da pasta de distribuição.
- Geração do relatório de análise de código (ESLint).
- Junção dos arquivos JS.
- Geração dos arquivos de CSS compilados.

### Gerar CSS compilado

```shell
grunt style
```

### Construção completa

```shell
grunt dist  | grunt
```

-----

## Como usar

Para a aplicação funcionar, siga os passos:

1. Execute o comando `npm start`
2. Acesse a url `http://localhost:8000/`

-----

## Notas de release

Para visualizar as notas de release acesse o _link_ abaixo:

[Notas de release](CHANGELOG.md)

-----

## Issues

Veja os issues do projeto: [aqui](../../issues)

-----

## Licença

© Copyright 2016 - All rights reserved | Todos os direitos Reservados

__AZ Tecnologia em Gestão__