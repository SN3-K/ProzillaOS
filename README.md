<div align="center">
	<br />
	<p>
		<a href="https://os.prozilla.dev/"><img src="https://os.prozilla.dev/assets/banner-logo-title-small.png" width="576" alt="ProzillaOS" /></a>
	</p>
	<p>
		<a href="https://github.com/prozilla-os/ProzillaOS/blob/main/LICENSE.md"><img alt="License" src="https://img.shields.io/github/license/Prozilla/ProzillaOS?style=flat-square&color=FF4D5B&label=License"></a>
		<a href="https://github.com/prozilla-os/ProzillaOS"><img alt="Stars" src="https://img.shields.io/github/stars/Prozilla/ProzillaOS?style=flat-square&color=FED24C&label=%E2%AD%90"></a>
		<a href="https://github.com/prozilla-os/ProzillaOS"><img alt="Forks" src="https://img.shields.io/github/forks/Prozilla/ProzillaOS?style=flat-square&color=4D9CFF&label=Forks&logo=github"></a>
		<a href="https://www.npmjs.com/package/prozilla-os"><img alt="NPM Version" src="https://img.shields.io/npm/v/prozilla-os?logo=npm&style=flat-square&label=prozilla-os&color=FF4D5B"></a>
	</p>
</div>

## About

This monorepo contains the source code of [os.prozilla.dev][website] as well as multiple packages. You can find the main package at [`prozilla-os`][prozilla-os].

ProzillaOS is a web-based operating system inspired by Ubuntu Linux and Windows. It is made with React, Vite and TypeScript by [Prozilla][prozilla].

## Packages

### Libraries

These libraries are different modules of ProzillaOS that can be installed separately or via the bundle package `prozilla-os`. Each library has a `src/main.ts` entry file and is published to the npm registry.

- [`prozilla-os`][prozilla-os]: A bundle containing the core packages and all standard applications of ProzillaOS
- [`@prozilla-os/core`][core]: Core functionality, React components and hooks
- [`@prozilla-os/shared`][shared]: Shared functions and utilities

#### Standard applications

- [`@prozilla-os/file-explorer`][file-explorer]: File explorer app
- [`@prozilla-os/terminal`][terminal]: Terminal/shell app
- [`@prozilla-os/text-editor`][text-editor]: Text editor app
- [`@prozilla-os/settings`][settings]: Settings app
- [`@prozilla-os/media-viewer`][media-viewer]: Media viewer app
- [`@prozilla-os/browser`][browser]: Browser app
- [`@prozilla-os/calculator`][calculator]: Calculator app

#### Non-standard applications

- [`@prozilla-os/logic-sim`][logic-sim]: Logic simulator app

### Sites

These packages contains the source code of parts of the ProzillaOS website. They are published to GitHub pages.

- [`prozilla-os-demo`](./packages/demo/): Demo site
- [`prozilla-os-docs`](./packages/docs/): Documentation site

## Scripts

ProzillaOS uses the package manager [pnpm](https://pnpm.io/) to run scripts.

### Shorthands

| Script | Description |
| --- | --- |
| `pnpm run start` | Run [`pnpm run site:start`](#package-prozilla-os-demo). VSCode is configured to run this script whenever the project is opened.
| `pnpm run build` | Build every package in sequential order.
| `pnpm run deploy` | Clear the `dist` directory, build and stage each package that comprises the website, then deploy to GitHub pages. This should then trigger a GitHub Action that deploys the build to production.

### Libraries

| Script | Description |
| --- | --- |
| `pnpm --filter <package_selector> build` | Build a sepecific subset of packages or a single package and output to respective `dist` directory/directories. For more information about selecting specific packages, read [pnpm's documentation on filtering](https://pnpm.io/filtering).
| `pnpm run packages:build` | Build all packages using Vite in sequential order and output to respective `dist` directories.
| `pnpm run packages:update` | Create a new changeset for packages and update their version accordingly.
| `pnpm run packages:release` | Publish the latest versions of each package to the npm registry.

### Package: `prozilla-os-demo`

| Script | Linked package script |
| --- | --- |
| `pnpm run site:start` | [`pnpm run start`](./packages/demo/README.md#scripts)
| `pnpm run site:build` | [`pnpm run build`](./packages/demo/README.md#scripts)
| `pnpm run site:preview` | [`pnpm run preview`](./packages/demo/README.md#scripts)
| `pnpm run site:stage` | [`pnpm run stage`](./packages/demo/README.md#scripts)
| `pnpm run site:deploy` | [`pnpm run deploy`](./packages/demo/README.md#scripts)
| `pnpm run site:fetch` | [`pnpm run fetch`](./packages/demo/README.md#scripts)

### Package: `prozilla-os-docs`

| Script | Linked package script |
| --- | --- |
| `pnpm run docs:start` | [`pnpm run start`](./packages/docs/README.md#scripts)
| `pnpm run docs:build` | [`pnpm run build`](./packages/docs/README.md#scripts)
| `pnpm run docs:preview` | [`pnpm run preview`](./packages/docs/README.md#scripts)
| `pnpm run docs:stage` | [`pnpm run stage`](./packages/docs/README.md#scripts)

## Links

- [Demo][demo]
- [Docs][docs]
- [GitHub][github]
- [npm][npm]
- [Discord][discord]
- [Ko-fi][ko-fi]

## Resources

These resources can help you get started with ProzillaOS.

- [prozilla-os/ProzillaOS-boilerplate][boilerplate]: Boilerplate code for a React Vite app implementing ProzillaOS

<div align="center">
	<br />
	<a href="https://os.prozilla.dev/"><img src="https://os.prozilla.dev/assets/screenshots/screenshot-files-info-taskbar-desktop.png" width="720" alt="Screenshot of ProzillaOS" /></a>
	<br />
</div>

[demo]: https://os.prozilla.dev/
[docs]: https://os.prozilla.dev/docs
[github]: https://github.com/prozilla-os/ProzillaOS
[npm]: https://www.npmjs.com/package/prozilla-os
[discord]: https://discord.gg/JwbyQP4tdz
[ko-fi]: https://ko-fi.com/prozilla
[issues]: https://github.com/prozilla-os/ProzillaOS/issues
[boilerplate]: https://github.com/prozilla-os/ProzillaOS-boilerplate
[prozilla]: https://prozilla.dev/
[prozilla-os]: ./packages/prozilla-os/
[core]: ./packages/core/
[shared]: ./packages/shared/
[file-explorer]: ./packages/apps/file-explorer/
[terminal]: ./packages/apps/terminal/
[text-editor]: ./packages/apps/text-editor/
[settings]: ./packages/apps/settings/
[media-viewer]: ./packages/apps/media-viewer/
[browser]: ./packages/apps/browser/
[calculator]: ./packages/apps/calculator/
[logic-sim]: ./packages/apps/logic-sim/