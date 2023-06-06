## chersite Front app

Chersite frontend starter app run with [vite](https://vitejs.dev/) as a static site generator (dev-server, HMR and transformation & compilation), [react](https://reactjs.org/),[typescript](https://www.typescriptlang.org/), and [less](https://lesscss.org/).

### Entry points

Two entry points are set:

- server side [src/server/index-server.tsx](src/server/index-server.tsx)
- client side [src/index.tsx](src/index.tsx)

### Configuration Files

Vite's configuration is managed by two main files:

- [vite.config.ts](vite.config.ts): contains the whole vite config [(vite config documentation)](https://vitejs.dev/config/)
- [vite.scripts.config.ts](vite.scripts.config.ts): contains the whole vite scripts config. It built scripts files relative to the SSR and SSG part.
- [config/config.js](config/config.js): is the internal paths and tasks config file.

### Prerender

TODO

## CLI

- [setup](#setup)
- [dev](#dev)
- [build](#build)
- [scaffold](#scaffold)

npm scripts command line interface is available from the main [package.json](./package.json).
Each script can be executed from `npm run {task}` command.

### setup

```shell
npm run setup:front
```

`Setup` allows a quick and uniform installation between cher-ami projects. It performs several tasks:

- Check if install as already made
- Setup name, description, author of project for package.json and readme
- Rename this readme as "README-framework.md" and create a new one with previous information
- Create install file cache
- Reset this current `.git` and re-init it

### dev

```shell
$ npm run dev:front
```

Start a dev-server with HMR.

### build

```shell
$ npm run build:front
```

Build script in selected [config/config.js](config/config.js) `outDir`

### scaffold

```shell
$ npm run scaffold:front
```

Used to create a new component. [Components templates](config/tasks/scaffold-component/templates)
can be modified according to the needs of the project.

Scaffold a new React component called `MyButton` in [src/components](src/components) will create:

```
src/
├── components
│      └── myButton
│             |── MyButton.module.less
│             └── MyButton.tsx
```

Options are defined from [config/config.js](config/config.js):

```js
bundleType: ["react", "dom"]
componentCompatibleFolders: ["components", "pages", "popin"]
componentsTemplatesDir: resolve("config/tasks/scaffold-component/templates")
```

## Vite plugins

By default, chersite implement:

plugins:

- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc)
- [@vitejs/plugin-legacy](https://github.com/vitejs/vite/tree/main/packages/plugin-legacy)
- [vite-plugin-checker](https://github.com/fi3ework/vite-plugin-checker)

Custom plugins:

- [vite-plugin-build-dotenv.ts](config/vite-plugins/vite-plugin-build-dotenv.ts)
- [vite-plugin-build-htaccess.ts](config/vite-plugins/vite-plugin-build-htaccess.ts)

### Vite plugin build dotenv

[vite-plugin-build-dotenv.ts](config/vite-plugins/vite-plugin-build-dotenv.ts)
fields the need to expose, in a `.env` file, external environment variables injected into
process.env by the CI or another task; In addition to the .env files corresponding to the current
[mode](https://vitejs.dev/guide/env-and-mode.html).
Once a new file is composed, it is copied to the selected folder(s).

.env out directory(ies) array is defined from [config/config.js](config/config.js):

```js
buildDotenvOutDir: [resolve("dist/front/www/")]
```

This plugin is mandatory for the use of the default cher-site config with the PHP micro framework.

### Vite plugin build htaccess

[vite-plugin-build-htaccess.ts](config/vite-plugins/vite-plugin-build-htaccess.ts)
will copy an .htaccess template in a selected directory.

Options are available in [.env](.env):

This plugin can scaffold a `.htpasswd` linked to the generated `.htaccess` file.
It's useful to add password on specific environment deployment.

```.dotenv
# Buid .htaccess file from template
BUILD_HTACCESS=true
# Build .htpasswd allow to create htaccess password to specific domaine
HTACCESS_ENABLE_AUTH=false
# Plain text user. ex: "staging"
HTACCESS_AUTH_USER=
# Encrypted password @generator: https://www.web2generators.com/apache-tools/htpasswd-generator
HTACCESS_AUTH_PASSWORD=
# ex: "var/www/"
HTACCESS_SERVER_WEB_ROOT_PATH=
# Redirect http to https
HTACCESS_ENABLE_HTTPS_REDIRECTION=false
```

Second part of the configuration is defined from [config/config.js](config/config.js):

```js
htaccessTemplateFilePath: resolve("src/.htaccess")
```
