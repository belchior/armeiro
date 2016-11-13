# Armeiro
Armeiro é uma ferramenta de automatização de tarefas relacionadas ao desenvolvimento front-end. Esta ferramenta vem com alguns módulos instalados e prontos para serem usados, confirma a lista de módulos para saber mais.

Em termos práticos o Armeiro é uma ferramenta de build baseada em [gulp](https://github.com/gulpjs/gulp) com uma síntase padronizada e um conjunto de tarefas (tasks) úteis para diversas etapas do desenvolvimento front-end, sempre focada em performance e simplicidade.

![armeiro](https://raw.githubusercontent.com/belchior/armeiro/master/armeiro.gif)


## Pré-requisitos
Ter instalado em sua máquina [NodeJS](https://nodejs.org/en/) e [NPM](https://docs.npmjs.com/);

Ter familiaridade com command-line (ferramenta de linha de comando) como o Terminal no Mac OS X e distribuições Linux ou o CMD do Windows.


## Instalando Armeiro
É possível instalar de duas formas:
* Fazendo o [download do projeto](https://github.com/belchior/armeiro/archive/master.zip) e descompactando o arquivo na raiz do seu projeto front-end.
* Executar o comando abaixo na raiz do projeto.

```shell
git clone https://github.com/belchior/armeiro.git
```


## Lista de módulos
Modulo          | Comando para instalar as dependências do modulo
--------------- | ---------------------------------------------------
[[browsersync]] | npm i --save-dev gulp browser-sync
[[copy]] | npm i --save-dev gulp
[[css]] | npm i --save-dev gulp gulp-concat gulp-cssnano
[[image]] | npm i --save-dev gulp gulp-imagemin imagemin-optipng
[[js]] | npm i --save-dev gulp gulp-concat gulp-uglify
[[less]] | npm i --save-dev gulp gulp-concat gulp-cssnano gulp-less
[[sass]] | npm i --save-dev gulp gulp-concat gulp-cssnano gulp-sass
[[sprite]] | npm i --save-dev gulp gulp.spritesmith
[[svg]] | npm i --save-dev gulp gulp-svgmin


## Wiki
Consulte a [documentação](https://github.com/belchior/armeiro/wiki) para saber mais.

## Licença
MIT
