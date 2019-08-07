'use strict';

const path = require('path');
const paths = require('../../config/paths');

const customAliases = require(path.resolve(paths.appConfig, 'aliases.js'));

const appPathResolver = dir => path.resolve(paths.appSrc, dir);

const aliases = {
  Src: '',

  Components: 'components',
  Config: 'config',
  Containers: 'containers',
  Consts: 'constants',
  Constants: 'constants',
  HOC: 'HOC',
  Localization: 'localization',
  Modules: 'modules',

  Services: 'services',
  Actions: 'services/actions',
  ActionTypes: 'services/actionTypes',
  Reducers: 'services/reducers',
  Sagas: 'services/sagas',
  Selectors: 'services/selectors',
  Utils: 'services/utilities',
  Utilities: 'services/utilities',
  Styles: 'styles',

  ...customAliases,
};

function createAliases(aliasCreator) {
  const resolvedAliases = {};

  for (const [alias, aliasPath] of Object.entries(aliases)) {
    aliasCreator(resolvedAliases, alias, aliasPath);
  }

  return resolvedAliases;
}

exports.jest = () =>
  createAliases((resolvedAliases, alias, aliasPath) => {
    resolvedAliases[`^${alias}(.*)$`] = `<rootDir>/src/${aliasPath}$1`;
  });

exports.webpack = () =>
  createAliases((resolvedAliases, alias, aliasPath) => {
    resolvedAliases[alias] = appPathResolver(aliasPath);
  });

exports.jsconfig = () =>
  createAliases((resolvedAliases, alias, aliasPath) => {
    resolvedAliases[`${alias}/*`] = [`${aliasPath}/*`];
  });
