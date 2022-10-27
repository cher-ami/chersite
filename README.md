<h1 align="center" style="text-align:center">🪜 chersite</h1>

<p align="center">
chersite is a web static-site generator for cher-ami projects based on 
<a href="https://vitejs.dev/">vite</a>, 
<a href="https://www.typescriptlang.org">typescript</a>,
<a href="https://reactjs.org">react</a>,
<a href="https://lesscss.org">less</a>

<br/>
<br/>
<img alt="ci" src="https://github.com/cher-ami/chersite/actions/workflows/ci.yml/badge.svg">
<img alt="GitHub contributors" src="https://img.shields.io/github/contributors/cher-ami/chersite">
</p>

<br/>

## Purpose

Chersite is a React static-site generator build in order to obtain a static server rendering for best performance.
The build step prepare a server script, a prerender script and a SPA version to leave choice of use.
This one embeds [@cher-ami/router](https://github.com/cher-ami/router) to manage server request static props routes transitions or languages.

This framework has been designed in its tree structure to easily set up a back-end or an API from `dist` folder.
The front-end side can then access this served API to build its templates.

## Requirements

- [node v16.16](https://nodejs.org/en)
- [npm](https://www.npmjs.com/)
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
