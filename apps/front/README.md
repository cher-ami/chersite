# Chersite front app

- [About](#about)
- [Entry points](#entry-points)
- [Configuration Files](#configuration-files)
- [Prerender](#prerender)
- [CLI](#cli)
- [Vite plugins](#vite-plugins)
- [Setup local SSL](#setup-local-ssl)
- [Workflow](#workflow)

## About

This front app is a React static-site generator build in order to obtain a static server rendering for best performance. It run with [vite](https://vitejs.dev/), [react](https://reactjs.org/),[typescript](https://www.typescriptlang.org/), and [less](https://lesscss.org/). The build step prepare a server script, a prerender script and a SPA version to leave choice of use. This one embeds [@cher-ami/router](https://github.com/cher-ami/router) to manage server static props, routes transitions and languages.

## Entry points

Two entry points are set:

- server side [src/server/index-server.tsx](src/server/index-server.tsx)
- client side [src/index.tsx](src/index.tsx)

## Configuration Files

Vite's configuration is managed by two main files:

- [vite.config.ts](vite.config.ts): contains the whole vite config [(vite config documentation)](https://vitejs.dev/config/)
- [vite.scripts.config.ts](vite.scripts.config.ts): contains the whole vite scripts config. It built scripts files relative to the SSR and SSG part.
- [config/config.js](config/config.js): is the internal paths and tasks config file.

## Prerender

The main goal of this app is to generate a static site. The prerender script is used to generate static html files from the server side.

You have to list manually all routes you want to prerender in [prerender/urls.ts](prerender/urls.ts):

```ts
return new Promise((resolve) => {
  resolve([
    "/",
    // will generate /work/index.html (because "/work/other-route" exists in the list)
    "/work",
    // will generate /work/first-work.html
    "/work/first-work",
    // duplicate route with lang if the router is configured on this way
    "/fr",
    "/fr/work",
    "/fr/work/first-work",
  ])
})
```

⚠️ **The front application routing is not dependent to the generated html files, so you can add any route you want in
this list**. In case you use a backend, you will have to get all routes from a backend API call and add them in this list.

By default, the generate command is executed on build step, but you can run it manually:

```shell
npm run generate
```

## CLI

- [dev](#dev)
- [build](#build)
- [generate](#generate)

npm scripts command line interface is available from the main [package.json](./package.json).
Each script can be executed from `npm run {task}` command.

### dev

```shell
$ npm run dev
```

Start a dev-server with HMR.

### build

```shell
$ npm run build
```

Build script in selected [config/config.js](config/config.js) `outDir`

### generate

Generate static html files from the server side.

```shell
npm run generate
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
buildDotenvOutDir: [resolve("dist/")]
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

## Setup local SSL

- Generate a self-signed certificate from `apps/front` root folder:

  ```shell
  sudo openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365 -nodes
  ```

- Trust the certificate:

  ```shell
  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain cert.pem
  ```

- Update .env var `PROTOCOL` to `https`

  ```dotenv
  PROTOCOL=https
  ```

When you run `npm run dev`, you should see the app running on https://localhost:3000

## Workflow

### CSS workflow

[Less](http://lesscss.org/) is used as css preprocessor. It can be set as `.less` file or `.module.less` for css module;
Both works by default.

[BEM methodology](http://getbem.com) is used to organize the integration of our templates and components
but have some differences depend on the use-case:

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

### Less Mixins

In order to export fonts, variables and mixins to each style files, each `.module.less` and `.less`
files contains as reference the same file:

```less
@import (reference) "src/references.less";
```

This file import "as reference" variables and mixins files who come from
[src/fonts](src/fonts), [src/atoms](src/atoms) and [src/mixins](src/mixins). If a new mixin file is create,
it will be added in [src/references](src/references).

## Credits

Developed by [cher-ami](https://github.com/cher-ami) team.

## Licence

[MIT](../../LICENSE)
