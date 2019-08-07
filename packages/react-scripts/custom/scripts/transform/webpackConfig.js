'use strict';

const paths = require('../../../config/paths');
const path = require('path');

const transformWebpackConfigFromSkeleton = require(path.resolve(
  paths.appConfig,
  'transformWebpackConfig.js'
));

module.exports = (webpackConfig, webpackEnv) => {
  // TODO:
  const customizedWebpackConfig = webpackConfig;

  return transformWebpackConfigFromSkeleton(
    customizedWebpackConfig,
    webpackEnv
  );
};
