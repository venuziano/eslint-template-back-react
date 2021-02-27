# API

## config para a formatação automática funcionar:

1. Instalar a extensão no VSCode chamada *EditorConfig for VS Code*: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
2. Instalar a extensão no VSCode chamada *ESLint*: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
3. colocar no settings.json do vscode:

```
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
}
```
4. Quando finalizar a instalação, é preciso fechar e abrir o vscode na pasta **raiz** do projeto, assim as configurações serão aplicadas para todos os arquivos.

## Local do settings.json (https://supunkavinda.blog/vscode-editing-settings-json):

* Windows %APPDATA%\Code\User\settings.json
* macOS $HOME/Library/Application Support/Code/User/settings.json
* Linux $HOME/.config/Code/User/settings.json

As configurações **podem** ser realizadas no arquivo `.eslintrc.json` ou `prettier.config.js`.

Arquivo de debug `launch.json` pronto. Basta selecionar o breakpoint e simular.

## Criar e executar migrations pelo Type ORM:

* Criar uma migrations, ou seja, o arquivo com o schema:

`yarn typeorm migration:create -n {nome da tabela}`

**Exemplo**: `yarn typeorm migration:create -n CreateUsers`

* Executar as migrations/arquivos criadas no banco de dados:

`yarn typeorm migration:run`

* Caso precise reverter uma migration. Somente é possível quando elas não estão commitadas.

`yarn typeorm migration:revert`

**OBS:** Configurar o arquivo `ormconfig.json` com a string de conexão do banco de dados.

## Arquitetura do projeto

Pensei em seguir a arquitetura SOLID. A nossa estrutura conta as pastas:

* models: arquivos do schema do banco;
* repositories: arquivos com metodos que o type orm não possui por default;
* services: arquivos com as regras de negócio de uma funcionalidade de um model. Aqui podem ser chamados os arquivos da pasta repositories;

Baseei a estrutura deste projeto a partir do projeto do link: https://github.com/venuziano/desafioDataBaseUploadTScomTypeORM



