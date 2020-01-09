![ackee|@ackee/react-scripts](https://img.ack.ee/ackee/image/github/js)

# [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/AckeeCZ/create-react-app/blob/master/LICENSE) [![CI Status](https://img.shields.io/travis/com/AckeeCZ/create-react-app.svg?style=flat)](https://travis-ci.com/AckeeCZ/create-react-app) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://reactjs.org/docs/how-to-contribute.html#your-first-pull-request) [![Coverage Status](https://img.shields.io/coveralls/github/AckeeCZ/create-react-app.svg?style=flat-square)](https://coveralls.io/github/AckeeCZ/create-react-app?branch=master) [![Dependency Status](https://img.shields.io/david/AckeeCZ/create-react-app.svg?style=flat-square)](https://david-dm.org/AckeeCZ/create-react-app)

# @ackee/react-scripts

This package includes scripts and configuration used by [Create React App](https://github.com/AckeeCZ/create-react-app).<br>
Please refer to its documentation:

- [Getting Started](https://facebook.github.io/create-react-app/docs/getting-started) – How to create a new app.
- [User Guide](https://facebook.github.io/create-react-app/) – How to develop apps bootstrapped with Create React App.

## How to use

To create a new project with specific version of `@ackee/react-scripts`, run the following command. Don't forget to replace `my-app` with your project name:

```bash
npx @ackee/create-react-app my-app --scripts-version @ackee/react-scripts@1.0.0
```

## Development

Read, how to efficiently develop the `react-scripts` package and how to locally build a new skeleton from the latest template.

### Testing react-scripts

### Testing new template

You can run `@ackee/create-react-app` with local react-scripts version:

```sh
npx @ackee/create-react-app my-test-app --scripts-version file:./create-react-app/packages/react-scripts;
```

Or you can just run a small script: `bash ./create-test-react-app.sh`

```sh
#!/usr/bin/env bash

# delete old data
rm -rf ./my-test-app;

# build skeleton with the latest local version of your react-scripts
npx @ackee/create-react-app my-test-app --scripts-version file:./create-react-app/packages/react-scripts;
```

> ## Save your time, read this:
>
> Make sure that `node_modules` aren't included in the `react-scripts` directory when running the script above. Otherwise, weird issues may occur!

### [Upgrading (rebasing) to a new Create React App version](custom/README.md)
