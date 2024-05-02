<h1 align="center" style="text-align:center">🪜 chersite</h1>

<p align="center">
chersite is multi apps structure witch include a SPA/SSG/SSR front framework for cher-ami projects.

<br/>
<br/>
<img alt="ci" src="https://github.com/cher-ami/chersite/actions/workflows/ci.yml/badge.svg">
<img alt="GitHub contributors" src="https://img.shields.io/github/contributors/cher-ami/chersite">
</p>

<br/>

- [Structure](#structure)
- [Requirements](#requirements)
- [Installation](#installation)
- [CLI](#cli)
- [Scripts](#scripts)

## Structure

This repo is **not a monorepo**, it provides standalone apps.
Each app has his own `package.json` and `node_modules` folder, we build them separately.

```
  apps
    └- back           ⬅ BO app (api, admin, whatever.)
    └- front          ⬅ cher-ami frontend starter
```

### Front app

The front app is a React SPA/SSG/SSR builder, scaffold with [vite](https://vitejs.dev/), [react](https://reactjs.org/),[typescript](https://www.typescriptlang.org/), and [sass](https://sass-lang.com/) with [@cher-ami/router](https://github.com/cher-ami/router) on top.

See the [front app documentation](apps/front/README.md)

### Back app

The back app is optional not set by default, it can be API, BO etc.

## Requirements

- [docker](https://www.docker.com/)

## Installation

This guide will help you to install the project on your local machine with docker.
Only the front app is installed by default, so you can start to work on it without any other configuration.

- Clone repo and move inside the repo folder:

```shell
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

- Install node dependencies for the root project and install dependencies for all apps:

```shell
npm i
```

- Setup the project:
  By default, SSG mode is enabled, you can switch to SPA or SSR mode by setting `MODE` to `SPA` or `SSR`  in the `cli/config.js` file.
### Development

```shell
mode="SSR" # or "SPA"
```

```shell
npm run setup
```

Then, start the dev server:

```shell
npm run front:dev
```

- Create a `apps/front/.env.local` file with your local IP (useful to access the frontend from other devices):

```shell
HOST="your local IP"
```

## CLI

npm scripts command line interface is available from the main [package.json](./package.json).
Each script can be executed from `npm run {task}` command.

### setup

```shell
npm run setup
```

`Setup` allows a quick and uniform installation between cher-ami projects. It performs several tasks:

- Check if install as already made
- Setup name, description, author of project for package.json and readme
- Rename this readme as "README-framework.md" and create a new one with previous information
- Create install file cache
- Reset this current `.git` and re-init it

### front:scaffold

```shell
npm run front:scaffold
```

Used to create a new component. [Components templates](cli/tasks/scaffold-component/templates)
can be modified according to the needs of the project.

Scaffold a new React component called `MyButton` in [apps/front/src/components](apps/front/src/components) will create:

```
 apps/front
       └── src
            └── components
                  └── myButton
                         |── MyButton.module.scss
                         └── MyButton.tsx
```

Options are defined from [cli/config.js](cli/config.js):

```js
bundleType: ["react"]
componentCompatibleFolders: ["components", "pages"]
```

## Scripts

### Update app version

To update the app in the root and in the `apps/` folder, you can use the `./script/update-app-version.sh` script :

```shell
./script/update-version.sh <patch|minor|major>
```

It will update the version in the `package.json` and `package-lock.json` files of the root and in the `apps/` folder and add a git tag to history.

## Credits

Developed by [cher-ami](https://github.com/cher-ami) team.

## Licence

[MIT](LICENSE)
