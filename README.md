# Trabalhe Na Saipos 

Projeto TodoList usando Nodejs, Angularjs e Mysql

## Installation
> Após baixa ou fazer clone do projeto, ir na pasta do mesmo roda o comando abaixo.

OS X & Linux $ Windows no Nodejs:
```sh
npm install ou yarn install
```
## Comando para iniciar o projeto Nodejs

```sh
npm start
```
OS X & Linux $ Windows no Angularjs:
```sh
npm install ou yarn install
```
## Comando para iniciar o projeto Mysql

```sh
npm start
OS X & Linux $ Windows no Mysql:
```sh
CREATE DATABASE `todoList`
CREATE TABLE `lista` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`descricao` VARCHAR(255) NULL DEFAULT NULL,
	`nome` VARCHAR(255) NULL DEFAULT NULL,
	`email` VARCHAR(255) NULL DEFAULT NULL,
    `countStatus` INT NULL DEFAULT 0,
	`status` INT NULL DEFAULT 0,
	PRIMARY KEY (`id`)
)
COLLATE='utf8_general_ci';

```
## Meta

Júlio César –  jcbarcelosrj@gmail.com

Distributed under the XYZ license. See ``LICENSE`` for more information.

[https://github.com/jcbarcelos/portifolio](https://github.com/jcbarcelos/)
