# opti-portal

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Contribution Guide

As an open source project, optiPortal is open to contributions from anyone in the community. We welcome all contributions regardless of type of contribution. This document outlines some practices to ensure consistent contributions to the project.

### Reporting Issues

Reporting issues is a great way to contribute to this project. You can report on issue by emailing [optimize-techops@umich.edu](mailto:optimize-techops@umich.edu) or by submitting an issue on [Github](https://github.com/optimizemi/optiPortal/issues/new/choose).

### Pull Requests

Pull requests are the only way to change the project's source code. They are always welcome, even if it's just a typo fix or documentation update. Significant changes should be associated to an existing [issue](https://github.com/optimizemi/optiPortal/issues).

#### Getting started

1. [Fork](https://help.github.com/articles/fork-a-repo/) the [optiPortal repository](https://github.com/optimizemi/optiPortal) to your own GitHub account and then [clone](https://help.github.com/articles/cloning-a-repository/) it to your local machine.

2. Run `npm install` or `yarn install` to install the dependencies (however **we prefer yarn**).
   _If dependencies are missing, either delete the `node_modules` folder and install again or locally install missing dependencies._
   _If you are adding a dependency, please use `yarn add`. The `yarn.lock` file is the source of truth for all project dependencies._

#### Setup

Before running any tests, make sure all dependencies are met and build all packages:

```
yarn
yarn build
```

#### Test structure

A good PR has working code but a great PR has working code accompanied with tests. This section contains our test structures and how to add/run your own tests. (STUB - needs expansion)

#### Testing your changes

Verify that your changes pass all tests and build locally. (STUB - needs expansion)

#### Linting

This project uses [ESLint](https://eslint.org/) to enforce code standards. Please run `yarn lint` before committing your changes to verify that the code style is correct. If not, you can use `yarn lint --fix` to fix most of the style changes. If there are still errors left, please manually correct them.

#### Documentation

If your contribution adds a new feature, refactors or changes project behavior in any manner we ask that you document the changes. Project documentation is located in the `docs` directory in the markdown format.

#### Final checklist

When submitting your PR, there is a series of questions you have to fill out. This helps project maintainers when determining acceptance of your pull request so please fill it out accurately.
