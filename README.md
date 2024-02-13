# java

Java language plugin for the @form8ion toolset

<!--status-badges start -->

[![Node CI Workflow Status][github-actions-ci-badge]][github-actions-ci-link]
[![Codecov][coverage-badge]][coverage-link]
![SLSA Level 2][slsa-badge]

<!--status-badges end -->

## Table of Contents

* [Features](#features)
  * [`scaffold`](#scaffold)
* [Usage](#usage)
  * [Installation](#installation)
  * [Example](#example)
    * [Import](#import)
    * [Execute](#execute)
  * [API](#api)
    * [`scaffold`](#scaffold-1)
      * [`projectRoot` __string__ (_required_)](#projectroot-string-required)
      * [`projectName` __string__ (_required_)](#projectname-string-required)
* [Contributing](#contributing)
  * [Dependencies](#dependencies)
  * [Verification](#verification)

## Features

### `scaffold`

* creates a [minimal POM](https://maven.apache.org/guides/introduction/introduction-to-the-pom.html#Minimal_POM)

## Usage

<!--consumer-badges start -->

[![MIT license][license-badge]][license-link]
[![npm][npm-badge]][npm-link]
[![Try @form8ion/java on RunKit][runkit-badge]][runkit-link]

<!--consumer-badges end -->

### Installation

```sh
$ npm install @form8ion/java --save
```

### Example

#### Import

```javascript
import {scaffold, lift, test} from '@form8ion/java';
```

#### Execute

```javascript
(async () => {
  const projectRoot = process.cwd();

  await scaffold({projectRoot, projectName: 'project-name'});

  if (await test({projectRoot})) {
    await lift({projectRoot, vcs: {}});
  }
})();
```

### API

#### `scaffold`

##### `projectRoot` __string__ (_required_)

path to the root of the project

##### `projectName` __string__ (_required_)

name of the project

## Contributing

<!--contribution-badges start -->

[![Commitizen friendly][commitizen-badge]][commitizen-link]
[![Conventional Commits][commit-convention-badge]][commit-convention-link]
[![semantic-release: angular][semantic-release-badge]][semantic-release-link]
[![Renovate][renovate-badge]][renovate-link]
[![PRs Welcome][PRs-badge]][PRs-link]

<!--contribution-badges end -->

### Dependencies

```sh
$ nvm install
$ npm install
```

### Verification

```sh
$ npm test
```

[commitizen-link]: http://commitizen.github.io/cz-cli/

[commitizen-badge]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg

[commit-convention-link]: https://conventionalcommits.org

[commit-convention-badge]: https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg

[semantic-release-link]: https://github.com/semantic-release/semantic-release

[semantic-release-badge]: https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release

[renovate-link]: https://renovatebot.com

[renovate-badge]: https://img.shields.io/badge/renovate-enabled-brightgreen.svg?logo=renovatebot

[PRs-link]: https://makeapullrequest.com

[PRs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg

[github-actions-ci-link]: https://github.com/form8ion/java/actions?query=workflow%3A%22Node.js+CI%22+branch%3Amaster

[github-actions-ci-badge]: https://img.shields.io/github/actions/workflow/status/form8ion/java/node-ci.yml.svg?branch=master&logo=github

[coverage-link]: https://codecov.io/github/form8ion/java

[coverage-badge]: https://img.shields.io/codecov/c/github/form8ion/java?logo=codecov

[slsa-badge]: https://slsa.dev/images/gh-badge-level2.svg

[license-link]: LICENSE

[license-badge]: https://img.shields.io/github/license/form8ion/java.svg

[npm-link]: https://www.npmjs.com/package/@form8ion/java

[npm-badge]: https://img.shields.io/npm/v/@form8ion/java?logo=npm

[runkit-link]: https://npm.runkit.com/@form8ion/java

[runkit-badge]: https://badge.runkitcdn.com/@form8ion/java.svg
