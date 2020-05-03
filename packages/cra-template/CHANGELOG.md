# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased

## Added

- Add npm scripts for generating changelog with `gitmoji-changelog`.
- Add `ci-lighthouse` npm script.
- Add `fela-plugin-prefixer`.

## Updated

- Set `EXTEND_ESLINT` to `true` since `@ackee/eslint-config` were upgraded to `2.1.0` -> `eslint-config-react-app` is now part of `@ackee/eslint-config`.
- Upgrade dependencies.
- Min required node version is 10.

## @ackee/cra-template@1.0.1 - 2020-04-30

## Fixed

- Use `BUILD_ENV` instead of `NODE_ENV` for retrieving correct env. config.

## @ackee/cra-template@1.0.0 - 2020-01-09

- Initial version.
