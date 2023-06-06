<h1 align="center" style="text-align:center">🪜 chersite</h1>

<p align="center">
chersite is web-base structure witch include front static-site generator for cher-ami projects based on 
<a href="https://vitejs.dev/">vite</a>, 
<a href="https://www.typescriptlang.org">typescript</a>,
<a href="https://reactjs.org">react</a>, and
<a href="https://lesscss.org">less</a>

<br/>
<br/>
<img alt="ci" src="https://github.com/cher-ami/chersite/actions/workflows/ci.yml/badge.svg">
<img alt="GitHub contributors" src="https://img.shields.io/github/contributors/cher-ami/chersite">
</p>

<br/>

## Front app

The front app is a React static-site generator build in order to obtain a static server rendering for best performance. The build step prepare a server script, a prerender script and a SPA version to leave choice of use.
This one embeds [@cher-ami/router](https://github.com/cher-ami/router) to manage server static props, routes transitions and languages.

➡ [front app documentation](apps/front/README.md)

## Back app

The back app is optional not set by default, it can be API, BO etc.

## Structure

This repo is **not a monorepo**, it provides standalone apps.
Each app has his own `package.json` and `node_modules` folder, we build them separately.

```
  apps
    └- back           ⬅ BO app (api, admin, whatever.)
    └- front          ⬅ cher-ami frontend starter
```

## Requirements

- [docker](https://www.docker.com/)

or

- [node v16.16](https://nodejs.org/en)
- [npm](https://www.npmjs.com/)

## Basic installation

This guide will help you to install the project on your local machine with docker.
Only the front app is installed by default, so you can start to work on it without any other configuration.

- Clone repo and move inside the repo folder:

```shell script
git clone git@github.com:cher-ami/chersite.git && cd chersite
```

- Start the docker container:

```shell
docker compose up
```

- Start shell from the container:

```shell
docker compose exec node /bin/bash
```

- Install node dependencies for the root project and all apps:

```shell
npm i && npm run init
```

- Setup de frontend starter (package.json name, readme, etc...):

```shell
npm run setup:front
```

Then, start the dev server:

```shell
npm run dev:front
```

- Create a `apps/front/.env.local` file with your local IP (useful to access the frontend from other devices):

```shell
HOST="{{YOUR_LOCAL_IP}}"
```

## Front app

for more information about the front app, see [apps/front/README.md](apps/front/README.md)

## Credits

Developed by [cher-ami](https://github.com/cher-ami) team.

## Licence

[MIT](LICENSE)
