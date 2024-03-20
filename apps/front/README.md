# Chersite front app

- [About](#about)
- [Builds](#builds)
  - [SSR build](#SSR-build)
  - [SSG build](#SSG-build)
  - [SPA build](#SPA-build)
- [Entry points](#entry-points)
- [Configuration Files](#configuration-files)
- [CLI](#cli)
- [Setup local SSL](#setup-local-ssl)

## About

Chersite front app is a React SPA/SSG/SSR framework, built with [vite](https://vitejs.dev/), [react](https://reactjs.org/),[typescript](https://www.typescriptlang.org/), [sass](https://sass-lang.com/) and [@cher-ami/router](https://github.com/cher-ami/router) on the top.

## Builds

When chersite is built, it automatically creates three types of apps. It allows you to choose to use the one that best suits the type of project.

### SSR build

The SSR app provides a `server.prod.js`, to run on production. The client code will hydrate the server response on the fly.

Output:

```
dist/
  - ssr/
      - client/     ← SSR client code
      - scripts/    ← contains the server.prod.js for stating the SSR app with "npm run start"
```

```shell
npm run build:ssr && npm run start
```

### SSG build

chersite front allows to generate a static HTML files with `prerender`.

the main thinks to consider is, the `prerender` fonction needs to know the list of routes to generate as static html files.
You have to list manually all routes you want to prerender in [prerender/urls.ts](prerender/urls.ts):

```ts
return new Promise((resolve) => {
  resolve([
    "/", // → /index.html
    "/work", // → /work/index.html
    "/work/first" // → /work/first.html
  ])
})
```

⚠️ **The front application routing is not linked to the generated html files, so you can add any route you want in
this list**. In case you use a backend, you will have to get all routes from a backend API call and add them in this list too.

By default, the generate command is executed on build step, but you can run it manually:

```shell
npm build:static
```

Output:

```
dist/
  - static/
      - client/     ← static page generated client code
      - scripts/    ← contains prerender.js and exe-server-prerender.js used to execute generate task
```

### SPA build

The single page application can be useful in some case (embedded sites for example) but not the best choice for SEO.

```shell
npm run build:spa
```

Output:

```
dist/
  - spa/            ← single page application
```

## Entry points

There is two entry points on the app. Both can be edited, depends of usage

- server side [src/index-server.tsx](src/index-server.tsx): Contains the root tree of the application.
- client side [src/index-client.tsx](src/index-client.tsx): Contains the client root app witch hydrate the server-side DOM rendering, or create a new root for SPA.

## Configuration Files

Vite's configuration is managed by:

- [vite.config.ts](vite.config.ts): contains the whole vite config [(vite config documentation)](https://vitejs.dev/config/)
- [vite.ssr-scripts.config.ts](vite.ssr-scripts.config.ts): contains the whole vite scripts config. It built scripts files relative to the SSR.
- [vite.static-scripts.config.ts](vite.static-scripts.config.ts): contains the whole vite scripts config. It built scripts files relative to the static generator.
- [config/config.js](config/config.js): contains the internal paths.

## CLI

npm scripts command line interface is available from the main [package.json](./package.json)

`npm run ...`:

- `dev` - start dev-server
- `build:spa` - build spa website type
- `build:ssr` - build SSR website type
- `build:static` - build static website type
- `build` - build all website's types
- `start` - run the SSR prod server

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

When you run `npm run dev`, you should see the app running on https://localhost:5173

## Credits

Developed by [cher-ami](https://github.com/cher-ami) team.

## Licence

[MIT](../../LICENSE)
