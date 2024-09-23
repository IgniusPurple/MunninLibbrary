# MunninLibrary

Bem-vindo ao Muninn Library, uma aplicação de biblioteca virtual para explorar, descobrir e ler uma variedade de livros online de forma gameficada.

## Descrição

 A iniciativa Muninn tem como principal objetivo facilitar e tornar conveniente a leitura com a aplicação de métodos de pesquisa eficientes, de forma que o usuário reserve seu tempo de leitura e não tenha que compartilhá-lo com a busca por seu conteúdo. Além de ler livros, também gasta seu tempo em suas resenhas com outros usuários, podendo armazenar os que o usuário já possui fora da plataforma, para concentrar todo o conteúdo em um só lugar.

## Recursos

- Explorar uma ampla coleção de livros
- Pesquisar por títulos, gêneros e autores
- Ler livros online
- Participar de eventos relacionados a livros
- Interagir com a comunidade de leitores

## Participantes

- Eduardo Zoldan Debastiani - 2210169
- Lucas Oliveira Santiago - 2210370
- Luis Felipe Borges Rosa - 2211829
- Rafael Luiz Pires Lima - 2211814
- Gustavo Maia Moreira - 2211155
- Matheus de Paula Costa Cavalcante - 2210950

## Tecnologias Utilizadas

- Ruby on Rails (API Mode)
- PostgreSQL
- BCrypt para hash de senhas

## Pré-requisitos

Certifique-se de que você tenha instalado as seguintes ferramentas:

- Ruby (>= 2.7)
- Rails (>= 6.1)
- PostgreSQL
- Bundler

## Passos para Configuração

### 1. Clonar o Repositório

```bash
git clone https://github.com/IgniusPurple/MunninLibbrary.git
cd MunninLibbrary
```

### 2. Configurar o Banco de Dados

``` bash
rails db:create
rails db:migrate
```

Nao esqueca de criar um arquivo .env com as senhas e usuarios do seu banco

Ex:
``` bash
POSTGRES_USER='seu_usuario_para_teste'
POSTGRES_PASSWORD='sua_senha_para_teste'

MUNINN_LIBRARY_DATABASE_USER='seu_usuario'
MUNINN_LIBRARY_DATABASE_PASSWORD='sua_senha'

```

### 3. Iniciando Servidor

``` bash
raails server
```

## Licença

Este projeto é licenciado sob a [Licença MIT](https://opensource.org/licenses/MIT).

