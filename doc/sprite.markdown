# sprite
## Mapeando arquivos e diretórios

```javascript
{
  "armeiro": {
    "sprite": {
      "orig": [
        "src/img/sprite/**/*.{gif,jpg,jpeg,png}"
      ],
      "dest": "build/",
      "name": "sprite.png",
      "cssName": "_sprite.less",
      "imgPath": "sprite.png"
    }
  }
}
```
## Lista de comandos
```shell
# documentation
gulp doc

# build
gulp build:sprite

# delete
gulp delete:sprite
```
