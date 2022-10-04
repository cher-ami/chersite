# 🪜 chersite

chersite is a web-base boilerplate for cher-ami projects based on
[vite](https://vitejs.dev/), [typescript](https://www.typescriptlang.org), [react](https://reactjs.org), [less](https://lesscss.org) and a micro PHP framework.

![ci](https://github.com/cher-ami/chersite/actions/workflows/ci.yml/badge.svg)
<img alt="GitHub contributors" src="https://img.shields.io/github/contributors/cher-ami/chersite">

## Purpose

Given that the majority of cher-ami projects require a part of server-side rendering, at least for metadata,
chersite embeds a micro PHP framework by default. All entrypoint files are served from a twig file.

This web-base remains as flexible as possible, all the compiler configuration can be modified from a configuration file.
Thus, chersite allows a simple index.html to be returned to the server if necessary. ([check "simple SPA installation"](#SimpleSpaInstallation)).
Also, the use of React is optional. It is quite possible for example to code vanilla js, and to manage views and templates on the server-side.

Finally, chersite has been designed in its tree structure to easily set up a back-end or an API from `dist` folder.
The front-end side can then access this served API to build its templates.

This repo use out of the box:

- [twig](https://twig.symfony.com/)
- [vite](https://vitejs.dev/)
- [typescript](https://www.typescriptlang.org/)
- [react](https://reactjs.org/)
- [less](http://lesscss.org/)
- [prettier](https://prettier.io/)

requirements:

- [node v14.17.0](https://nodejs.org/en)
- [npm](https://www.npmjs.com/)
- [PHP 7.4](https://www.php.net/releases/7_4_0.php)
- [composer](https://getcomposer.org/)
- [git](https://git-scm.com/)

## Summary

- [Installation](./docs/01.installation.md)
- [Vite configuration](./docs/02.vite-configuration.md)
- [Vite simple SPA installation](./docs/03.vite-simple-spa-installation.md)
- [CLI](./docs/04.cli.md)
- [Environment variables](./docs/05.environment-variables.md)
- [Vite plugins](./docs/06.vite-plugins.md)
- [Less mixins](./docs/08.less-mixins.md)
- [CSS workflow](./docs/07.css-workflow.md)

## Credits

Developed by [cher-ami](https://github.com/cher-ami) team.
