'use strict';

const path = require('path');
const webpack = require('webpack');
const WorkerPlugin = require('worker-plugin');

const paths = require('../../config/paths');
const insertPreloaders = require('./utils/insertPreloaders');
const appendBabelPlugins = require('./utils/appendBabelPlugins');

const preloaders = [
  {
    loader: require.resolve('webpack-ant-icon-loader'),
    enforce: 'pre',
    include: [require.resolve('@ant-design/icons/lib/dist')],
  },
];

const getBabelPlugins = webpackEnv => {
  const isEnvProduction = webpackEnv === 'production';

  return [
    isEnvProduction && [
      require.resolve('babel-plugin-transform-imports'),
      {
        lodash: {
          transform: 'lodash/${member}',
          preventFullImport: true,
        },
        antd: {
          transform(importName) {
            return `antd/es/${importName.toLowerCase()}`;
          },
          preventFullImport: true,
        },
        recompose: {
          transform: 'recompose/${member}',
          preventFullImport: true,
        },
      },
    ],

    isEnvProduction && [
      'babel-plugin-custom-import-path-transform',
      {
        transformImportPath: path.resolve(__dirname, 'transformImportPath.js'),
      },
    ],
  ].filter(Boolean);
};

const getNodeModulesBabelPlugins = webpackEnv => {
  const isEnvProduction = webpackEnv === 'production';

  return [
    isEnvProduction && [
      'babel-plugin-custom-import-path-transform',
      {
        transformImportPath: path.resolve(__dirname, 'transformImportPath.js'),
      },
    ],
  ].filter(Boolean);
};

const transformRules = (rules, webpackEnv) => {
  insertPreloaders(rules, preloaders);

  appendBabelPlugins(rules, getBabelPlugins(webpackEnv));

  appendBabelPlugins(
    rules,
    getNodeModulesBabelPlugins(webpackEnv),
    rule => rule.include !== paths.appSrc
  );

  return rules;
};

const transformPlugins = plugins => {
  const definePlugin = plugins.find(
    plugin => plugin instanceof webpack.DefinePlugin
  );

  plugins.push(
    new WorkerPlugin({
      plugins: [definePlugin],
    })
  );

  return plugins;
};

module.exports = (webpackConfig, webpackEnv) => {
  webpackConfig.module.rules = transformRules(
    webpackConfig.module.rules,
    webpackEnv
  );

  webpackConfig.plugins = transformPlugins(webpackConfig.plugins, webpackEnv);

  return webpackConfig;
};
