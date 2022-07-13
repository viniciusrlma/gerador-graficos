# Desafio de Projeto Front-end

Olá time TQI e time DIO! Primeiramente, gostaria de agradecer a oportunidade de participar deste desafio.

Neste documento irei comentar sobre: como rodar o projeto, pontuando algumas das decisões tomadas durante o desenvolvimento da aplicação.

## Introdução

Durante o desenvolvimento deste projeto, foquei em alguns pontos:

-Ter um versionamento bem documentado, com commits claros e autoexplicativos.
-Desenvolver, através das boas práticas, um código legível, organizado e com uma boa arquitetura de maneira a facilitar a escalabilidade e manutenção da aplicação.
-Desenvolver uma UI responsiva e uma UX fluída, sendo acessível à todos os dispositivos.

## Principais ferramentas utilizadas

-ReactJS
-Styled Components
-Axios

## Arquitetura

A respeito da arquitetura de pastas, o projeto seque uma estrutura basica, onde:
  - components: arquivos de componentes reutilizáveis.
  - pages: páginas da aplicação.
  - services: configurações de consumo da API.
  - global: configuração de reset da estilização default do browser.
  
## Rodando o projeto

### `npm`

Para rodar as dependências do projeto.

### `npm start`

Para rodar o projeto em modo de desenvolvimento.
Abra [http://localhost:3000](http://localhost:3000) para visualizá-lo em seu browser.

A página irá atualizar no caso de existirem alterações nos arquivos.

### `npm run build`

Para fazer o build do projeto para produção.

## Decisões

### Conceito do projeto

A idéia do projeto era desenvolver uma aplicação capaz de gerar diferentes gráficos a partir da inserção, por parte do usuário, das seguintes váriaveis:
  1) Título -> Título do gráfico;
  2) Etiquetas -> Nomenclaturas desejadas para identificar o eixo X do gráfico;
  3) Valores -> Valores a serem atribuidos as respectivas etiquetas informadas;
  4) Legenda -> Descrição das informações (etiquetas e valores) plotadas no gráfico;
  5) Tipo -> Tipo do gráfico (barra, linha ou pizza);
  
### Gerenciamento de tarefas

Para controle das tarefas a serem executadas, utilizei a ferramenta "Notion", criando uma lista das necessidades da aplicação e os respectivos to do's para atender tais necessidades.

## Conclusão

Novamente, gostaria de agradecer a oportunidade! Espero que gostem do projeto tanto quanto gostei de desenvolvê-lo =)

Good coding!
