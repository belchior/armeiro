# Armeiro
Armeiro é uma ferrementa de automatização de tarefas relacionadas ao desenvolvimento front-end. Ela tem como objetivo aumentar produtividade e qualidade de software e permitir que os devs tenham vida social.

![armeiro](https://raw.githubusercontent.com/belchior/armeiro/master/armeiro.gif)

## Pré-requisitos
Para a utilização desse projeto é necessário ter instalado em seu computador o [NodeJS](https://nodejs.org) ou [io.js](https://iojs.org) e [NPM](https://www.npmjs.com);

Ter familiaridade com `command-line` (ferramenta de linha de comando) como o Terminal no Mac OS X e distribuições Linux ou o CMD do Windows.

## Instalação
Todos os comandos a seguir devem ser executados na sua `command-line` preferida s2.

Baixe o projeto usando link para [download](https://github.com/belchior/armeiro/archive/master.zip) ou clone usando o comando:

``` shell
git clone git@github.com:belchior/armeiro.git
```

Dentro do diretório execute o seguinte comando
``` shell
npm install
```
Todas as dependências seram baixadas e instaladas e assim que tudo estiver terminado o Armeiro estará pronto para fornecer armamento pesado para o seu projeto de front.

## Setup
Armeiro usa o arquivo package.json para armazenar algumas configurações do projeto. Para começar é necessário definir um objeto chamado armeiro e mapear os diretórios do projeto.

``` js
{
  "...",
  "armeiro": {
    "js": {
      "orig": ["src/js/*"],
      "dest": "build/"
    },
    "less": {
      "orig": ["src/less/**/*.less"],
      "dest": "build/"
    },
    "..."
  },
  "..."
}
```
## Listando arquivos e diretórios
Armeiro usa [node-glob](https://github.com/isaacs/node-glob) para fazer o carregamentos dos arquivos.

Abaixo alguns exemplos de carregamentos.
``` js
// mapear todos arquivos de um diretório
"orig": "build/*"

// mapear todos arquivos de uma extensão
"orig": "css/*.css"

// usando multiplas extensões
"orig": "img/*.{gif,jpg,png}"

// Mapeando diferentes diretórios
"orig": [
  "src/images/*.{gif,jpg,png}",
  "src/icons/*.png"
]

// Para evitar o carregamento de um diretório ou arquivo é necessário
// colocar o caracter "!" no começo do caminho
"orig": [
  "src/images/*",
  "!src/images/sprite",
  "!src/images/sprite/*"
]
```

## Lista de Comandos
``` shell
usage: gulp [command]
            [command]:[option]

  command - compile, concat, compress, sprite, watch, clear, help
  option  - js, css, coffee, less, sass, images, sprite

compile: Compila arquivos baseado nas seguintes opções
  coffee, less, sass

concat: Junta o conteúdo de todos os arquivos em apenas um, baseado nas seguintes opções.
  js, css, coffee, less, sass
  Note que caso seja necessário os arquivos seram compilado antes de serem unidos.

compress: Comprime arquivos baseado nas seguintes opções
  js, css, coffee, less, sass, images

sprite: Gera sprite. Não tem opções

watch: Permanece escutando alterações em arquivos e executa um commando baseado nas seguintes opções
  coffee (compile),
  less (compile),
  sass (compile),
  images (compress),
  sprite (sprite)

clear: Remove todos arquivos de um diretório baseado nas seguintes opções
  js, css, coffee, less, sass, images, sprite
  Note que clear:[option] ira remover os arquivos do tipo [option] contidos no diretório armeiro.[option].dest

help: Imprime a lista de comandos
```


## Agradecimentos
Este projeto é uma pequena retribuição a fantástica comunidade JavaScript, sem ela este projeto não seria possível. s2 ;-)

## Licença
MIT
