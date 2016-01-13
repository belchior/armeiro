# Armeiro
Armeiro é uma ferramenta de automatização de tarefas relacionadas ao desenvolvimento front-end. Foi desenvolvida para trazer produtividade e qualidade de software e permitir que os devs tenham vida social.

![armeiro](https://raw.githubusercontent.com/belchior/armeiro/master/armeiro.gif)
## Pré-requisitos
Para a utilização desse projeto é necessário ter instalado em seu computador o NodeJS ou io.js e NPM;

Ter familiaridade com command-line (ferramenta de linha de comando) como o Terminal no Mac OS X e distribuições Linux ou o CMD do Windows.
## Instalando Armeiro
É possível instalar de duas formas:
* Fazendo o [download do projeto](https://github.com/belchior/armeiro/archive/master.zip) e descompactando o arquivo na raiz do seu projeto front-end.
* Executar o comando abaixo na raiz do projeto.

```shell
git clone https://github.com/belchior/armeiro.git
```
## Instalando Modulos
Armeiro possui uma arquitetura baseada em modulos onde cada um é independente do outro.
Para tornar um modulo disponível é necessário incluir-lo como uma dependência no arquivo package.json ou instala-lo manualmente usando a opção `--save-dev`.

Modulo          | Comando para instalar as dependências do modulo
--------------- | ---------------------------------------------------
browsersync     | npm i --save-dev gulp browser-sync
coffeescript    | npm i --save-dev gulp gulp-util del glob gulp-sourcemaps gulp-concat gulp-uglify gulp-coffee
compressImages  | npm i --save-dev gulp gulp-util del glob gulp-imagemin imagemin-optipng
compressSVG     | npm i --save-dev gulp gulp-util del glob imagemin-svgo
css             | npm i --save-dev gulp gulp-util del glob gulp-sourcemaps gulp-concat gulp-minify-css
js              | npm i --save-dev gulp gulp-util del glob gulp-sourcemaps gulp-concat gulp-uglify
less            | npm i --save-dev gulp gulp-util del glob gulp-sourcemaps gulp-concat gulp-minify-css gulp-less
livereload      | npm i --save-dev gulp gulp-util gulp-connect
sass            | npm i --save-dev gulp gulp-util del glob gulp-sourcemaps gulp-concat gulp-minify-css gulp-sass
sprite          | npm i --save-dev gulp gulp-util del gulp.spritesmith

Como resultado final seu arquivo package.json vai conter algo parecido com o abaixo

```javascript
"...",
"devDependencies": {
  "browser-sync": "^2.10.1",
  "gulp-less": "^3.0.3",
  "..."
}
"..."
```

Todas as dependências serão baixadas e instaladas e assim que tudo estiver terminado o Armeiro estará pronto para fornecer armamento pesado para o seu projeto front-end.
## Setup
Crie um arquivo chamado gulpfile.js na raiz do projeto com o seguinte conteúdo

```javascript
'use strict';
var armeiro = require('./armeiro');
```

Armeiro usa o arquivo package.json para armazenar algumas configurações do projeto. Para começar é necessário definir um objeto chamado armeiro e mapear os diretórios do projeto como no exemplo abaixo.

```javascript
// arquivo package.json
{
  "...",
  "armeiro": {
    "js": {
      "orig": ["src/js/*"],
      "dest": "build/",
      "mainFile": "script.js",
      "mainFileCompressed": "script.min.js"
    },
    "less": {
      "orig": ["src/less/**/*.less"],
      "dest": "build/",
      "mainFile": "style.less.css",
      "mainFileCompressed": "style.min.less.css"
    },
    "..."
  },
  "..."
}
```

#### Listando arquivos e diretórios
Armeiro usa [node-glob](https://github.com/isaacs/node-glob) para fazer o carregamentos dos arquivos e [gulp](https://github.com/gulpjs/gulp) para executar os comando.

Abaixo possui alguns exemplos de carregamentos.

```javascript
// Dentro de cada modulo estará disponível um objeto armeiro, onde será
// possível acessar os arquivos mapeados no arquivo package.json

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
```
## Lista de Comandos
Todos os comando usam o objeto `armeiro.[module].orig` para carregar arquivos e salva  no diretório definido em `armeiro.[module].dest`. Consulte os [Modulos](https://github.com/belchior/armeiro#modulos) disponível para mais informações.
#### build
Este comando irá concatenar e depois comprimir os arquivos  e como resultado será gerado um arquivo nomeado em `armeiro.[module].mainFileCompressed` e salvo no diretório definido em `armeiro.[module].dest`.
```shell
# [options]: coffee, css, js, less, sass, sprite
gulp build:[option]
```
#### compile
Compila arquivos baseado nas seguintes opções

```shell
# [options]: coffee, less, sass
gulp compile:[option]
```
#### compress
Comprime arquivos baseado nas seguintes opções

```shell
# [option]: coffee, images, svg, css, js, less, sass
gulp compress:[option]
```
#### concat
Concatena arquivos baseado nas seguintes opções

```shell
# [option]: coffee, css, js, less, sass
gulp concat:[option]
```
#### delete
Remove os arquivos contidos no diretório `armeiro.[module].dest` considerando apenas os arquivos que foram mapeados em `armeiro.[module].orig`

```shell
[option]: coffee, images, svg, css, js, less, sass
gulp delete:[option]
```
#### watch
Permanece escutando alterações em arquivos mapeados em `armeiro.[module].orig` e executa o comando segundo as opções

```shell
[option]: [module]:build, [module]:compress, [module]:concat
gulp watch:[option]

# example
gulp watch:css:compress
gulp watch:sass:compile
```
## Lista completa de comandos
```shell
# documentation
gulp doc

# build
gulp build:coffee
gulp build:css
gulp build:js
gulp build:less
gulp build:sass
gulp build:sprite

# compile
gulp compile:coffee
gulp compile:less
gulp compile: sass

# compress
gulp compress:coffee
gulp compress:images
gulp compress:svg
gulp compress:css
gulp compress:js
gulp compress:less
gulp compress:sass

# concat
gulp concat:coffee
gulp concat:css
gulp concat:js
gulp concat:less
gulp concat:sass

# delete
gulp delete:coffee
gulp delete:images
gulp delete:svg
gulp delete:css
gulp delete:js
gulp delete:less
gulp delete:sass

# watch
gulp watch:[module]:build
gulp watch:[module]:compress
gulp watch:[module]:concat
```
## Agradecimentos
Este projeto é uma pequena retribuição a fantástica comunidade JavaScript, sem ela este projeto não seria possível. s2 ;-)
## Licença
MIT
