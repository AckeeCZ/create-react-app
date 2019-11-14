'use strict';

const paths = require('../../config/paths');

const transformWebpackConfig = require('../../config/transformWebpackConfig');
const transformWebpackConfigFromSkeleton = require(paths.appWebpackConfig);

module.exports = (webpackConfig, webpackEnv) => {
  const customizedWebpackConfig = transformWebpackConfig(
    webpackConfig,
    webpackEnv
  );

  if (!transformWebpackConfigFromSkeleton) {
    return customizedWebpackConfig;
  }

  return transformWebpackConfigFromSkeleton(
    customizedWebpackConfig,
    webpackEnv
  );
};
