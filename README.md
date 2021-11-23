# 🪜 chersite

chersite is a web-base boilerplate for cher-ami projects based on
[vite](https://vitejs.dev/), [typescript](https://www.typescriptlang.org), [react](https://reactjs.org), [less](https://lesscss.org) and a micro PHP framework.

![ci](https://github.com/cher-ami/chersite/actions/workflows/ci.yml/badge.svg)
<img alt="GitHub contributors" src="https://img.shields.io/github/contributors/cher-ami/chersite">

## Purpose

Given that the majority of cher-ami projects require a part of server-side rendering, at least for meta-data,
chersite embeds a micro PHP framework by default. All entrypoints files are served from a twig file.

This web-base remains as flexible as possible, all the compiler configuration can be modified from a configuration file.
Thus, chersite allows a simple index.html to be returned to the server if necessary. Also, the use of react is optional.
It is quite possible for example to code vanilla js, and to manage views and templates on the server-side.

Finally, chersite has been designed in its tree structure to easily setup a back-end or an API from `dist` folder.
The front-end side can then access this served API to build its templates.

## Summary

- [Default tools](#DefaultTools)
- [Requirements](#Requirements)
- [Installation](#Installation)
- [Vite configuration](#ViteConfiguration)
  - [Configuration files](#ConfigurationFiles)
  - [Entry points](#Entrypoints)
- [CLI](#Cli)
  - [setup](#setup)
  - [dev](#dev)
  - [build](#build)
  - [scaffold](#scaffold)
  - [prettier](#prettier)
- [Environment variables](#Environmentvariables)
- [Vite plugins](#VitePlugins)
  - [Vite plugin build dotenv](#BuildDotenv)
  - [Vite plugin build htaccess](#BuildHtaccess)
  - [Vite plugin build atoms](#BuildAtoms)
- [Less mixins](#LessMixins)
- [CSS workflow](#CssWorkflow)
  - [BEM for .module.less](#BemForModuleLess)
  - [BEM for .less](#BemForLess)
- [Credits](#Credits)
- [Licence](#Licence)

## <a name="DefaultTools"></a>Default tools

This repos use out of the box:

- [twig](https://twig.symfony.com/)
- [vite](https://vitejs.dev/)
- [typescript](https://www.typescriptlang.org/)
- [react](https://reactjs.org/)
- [less](http://lesscss.org/)
- [prettier](https://prettier.io/)

## <a name="Requirements"></a>Requirements

- [node v14.17.0](https://nodejs.org/en)
- [npm](https://www.npmjs.com/)
- [PHP 7.4](https://www.php.net/releases/7_4_0.php)
- [composer](https://getcomposer.org/)
- [git](https://git-scm.com/)

## <a name="Installation"></a>Installation

clone repos:

```shell script
$ git clone git@github.com:cher-ami/chersite.git
```

move to folder:

```shell script
$ cd chersite
```

run setup project:

```shell script
$ npm run setup
```

## <a name="ViteConfiguration"></a>Vite configuration

chersite use [vite](https://vitejs.dev/) frontend tool.
This one supports the dev-server, HMR and transformation & compilation.

### <a name="ConfigurationFiles"></a>Configuration Files

Vite configuration is managed by two main files:

- [vite.config.ts](vite.config.ts): contains the whole vite config [(vite config documentation)](https://vitejs.dev/config/)
- [config/config.js](config/config.js): is the internal paths and tasks config file.

### <a name="Entrypoints"></a>Entry points

By defaut, the single application entrypoint is [src/index.tsx](src/index.tsx). It initializes a react App.
But this file can be changed as `index.ts` or `index.js`. In case this filename or type change, [config/config.js](config/config.js)
`input` array need to be modified.

```js
input: [
  "src/index.tsx", // ->  ex: modified as 'src/main.js'
]
```

Being an array, it is possible to define several application entry points.

```js
input: ["src/main.ts", "src/second.ts"]
```

The default [base.twig](dist/front/www/views/layouts/base.twig) template,
is configured to add as script each input entrypoint automatically.

## <a name="Cli"></a>CLI

npm scripts command line interface is available from [package.json](./package.json).
Each script can be executed from `npm run {task}` command.

### <a name="setup"></a>setup

```shell
$ npm run setup
```

`Setup` allows a quick and uniform installation between cher-ami projects. It performs several tasks:

- Check if install as already made
- Install node and PHP dependencies
- Setup name, description, author of project for package.json and readme
- Rename this readme as "README-framework.md" and create a new one with previous informations
- Create install file cache
- Reset this current `.git` and re-init it

### <a name="dev"></a>dev

```shell
$ npm run dev
```

Start a dev-server with HMR.

### <a name="build"></a>build

```shell
$ npm run build
```

Build script in selected [config/config.js](config/config.js) `outDir`

### <a name="scaffold"></a>scaffold

```shell
$ npm run scaffold
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

### <a name="prettier"></a>prettier

```shell
$ npm run prettier
```

Execute prettier tool on every project files. [.prettierignore](.prettierignore) allows to skip this
task for the files filled in.

## <a name="Environmentvariables"></a>Environment variables

Vite comes with an internal environment variables system. ([vite: Env Variables and Modes](https://vitejs.dev/guide/env-and-mode.html))
By default `.env.local` file create on setup, is gitignore.

## <a name="VitePlugins"></a>Vite plugins

By defaut, chersite implement:

Vite-core plugins:

- [@vitejs/plugin-react](https://github.com/vitejs/vite/tree/main/packages/plugin-react)
- [@vitejs/plugin-legacy](https://github.com/vitejs/vite/tree/main/packages/plugin-legacy)

Independant plugin:

- [vite-plugin-checker](https://github.com/fi3ework/vite-plugin-checker)

Internal chersite plugin:

- [vite-plugin-build-dotenv.ts](config/vite-plugins/vite-plugin-build-dotenv.ts)
- [vite-plugin-build-htaccess.ts](config/vite-plugins/vite-plugin-build-htaccess.ts)
- [vite-plugin-build-atoms.ts](config/vite-plugins/vite-plugin-build-atoms.ts)

These plugins are declared and configured in [vite.config.ts](vite.config.ts)

### <a name="BuildDotenv"></a>Vite plugin build dotenv

[vite-plugin-build-dotenv.ts](config/vite-plugins/vite-plugin-build-dotenv.ts)
fields the need to expose, in a `.env` file, external environment variables injected into
process.env by the CI or an other task; In addition to the .env files corresponding to the current
[mode](https://vitejs.dev/guide/env-and-mode.html).
Once a new file is composed, it is copied to the selected folder(s).

.env out directory(ies) array is defined from [config/config.js](config/config.js):

```js
buildDotenvOutDir: [resolve("dist/front/www/")]
```

This plugin is mandatory for the use of the default cher-site config with the PHP micro framework.

### <a name="BuildHtaccess"></a>Vite plugin build htaccess

[vite-plugin-build-htaccess.ts](config/vite-plugins/vite-plugin-build-htaccess.ts)
will copy an .htaccess template in a selected directory.

Options are available in [.env](.env):

This plugin can scaffold a `.htpasswd` linked to the generated `.htaccess` file.
It's useful to add password on specific environment deploiement.

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

### <a name="BuildAtoms"></a>Vite plugin build atoms

[vite-plugin-build-atoms.ts](config/vite-plugins/vite-plugin-build-atoms.ts)
will parses some less variables and expose them as javascript object in new files.
This file is rebuilt each time one less variable change.

By default, variables from [partials files](src/atoms/partials) are listen. Atoms file
generated looks like:

```ts
export default {
  "breakpoint-mobile": "320px",
  "breakpoint-phablet": "600px",
  "breakpoint-tablet": "768px",
  // ...
}
```

Use one variable in JS:

```ts
import atoms from "src/atoms/atoms.ts"
atoms["breakpoint-mobile"] // "320px"
```

## <a name="LessMixins"></a>Less Mixins

In order to export fonts, variables and mixins to each style files, each `.module.less` and `.less`
files contains as reference the same file:

```less
@import (reference) "src/references.less";
```

This file import "as reference" variables and mixins files who come from
[src/fonts](src/fonts), [src/atoms](src/atoms) and [src/mixins](src/mixins). If a new mixin file is create,
it will be added in [src/references](src/references).

## <a name="CssWorkflow"></a>CSS workflow

[Less](http://lesscss.org/) is used as css preprocessor. It can be set as `.less` file or `.module.less` for css module;
Both works by default.

[BEM methodology](http://getbem.com) is used to organize the integration of our templates and components
but have some differences depending of the use-case:

### <a name="BemForModuleLess"></a>BEM for `.module.less`

```less
/**
 * BEM block is always "root" className
 */
.root {
}
/**
 * BEM element (.camelCase)
 */
.myButton {
  /**
   * BEM modifier (&_camelCase)
   * sep with "_" allows to target it from template like this: "css.myButton_myModifier"
   */
  &_red {
  }
}
```

### <a name="BemForLess"></a>BEM for `.less`

```less
/**
 * BEM block (.PascalCase)
 */
.Component {
  /**
 * BEM element (.camelCase)
 usage: "Component_myElement"
 */
  &_myElement {
    /**
     * BEM modifier (&_camelCase)
     * sep with "_" allows to target it from template
     * usage: "Component_myElement-myModifier"
     */
    &-red {
    }
  }
}
```

## <a name="Credits"></a>Credits

Developped by [cher-ami](https://github.com/cher-ami) team.

## <a name="Licence"></a>[License](./LICENSE)

Copyright (c) Cher Ami

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
