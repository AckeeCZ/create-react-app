'use strict';

const path = require('path');
const fs = require('fs');

const rootPath = path.resolve(__dirname, '../../');
const resolveReactScriptsRoot = file => path.resolve(rootPath, file);

const appDirectory = fs.realpathSync(process.cwd());
const resolveAppRoot = relativePath => path.resolve(appDirectory, relativePath);

const paths = {
  // @start: react-scripts context
  customPackageJson: resolveReactScriptsRoot('custom/custom-package.json'),

  prettierConfig: resolveReactScriptsRoot('template/prettier.config.js'),
  templateSrc: resolveReactScriptsRoot('template/src'),

  packageJson: resolveReactScriptsRoot('package.json'),

  // TODO: won't work after eject, use resolveAppRoot then
  webpackConfig: resolveReactScriptsRoot('config/webpack.config.js'),
  // @end: react-scripts context

  // @start: app context
  appPackageJson: resolveAppRoot('package.json'),
  appWebpackConfig: resolveAppRoot('config/transformWebpackConfig.js'),
  appSrc: resolveAppRoot('src'),
  // @end: app context
};

module.exports = paths;
