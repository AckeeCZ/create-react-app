'use strict';

const path = require('path');
const fs = require('fs');

const rootPath = path.resolve(__dirname, '../../');
const resolveReactScriptsRoot = file => path.resolve(rootPath, file);

const appDirectory = fs.realpathSync(process.cwd());
const resolveAppRoot = relativePath => path.resolve(appDirectory, relativePath);

const paths = {};

// Paths after eject
Object.assign(paths, {
  // start: react-scripts context
  customTransformImportPath: resolveReactScriptsRoot(
    'custom/config/plugins/transformImportPath.js'
  ),
  webpackConfig: resolveAppRoot('config/webpack.config.js'),
  // end: react-scripts context

  // start: app context
  appWebpackConfig: resolveAppRoot('config/transformWebpackConfig.js'),
  appTransformImportPath: resolveAppRoot(
    'config/plugins/transformImportPath.js'
  ),
  appSrc: resolveAppRoot('src'),
  // end: app context
});

// @remove-on-eject-beginning
// Paths before eject
Object.assign(paths, {
  // start: react-scripts context
  customPackageJson: resolveReactScriptsRoot('custom/custom-package.json'),
  prettierConfig: resolveReactScriptsRoot('template/prettier.config.js'),
  templateSrc: resolveReactScriptsRoot('template/src'),
  packageJson: resolveReactScriptsRoot('package.json'),

  webpackConfig: resolveReactScriptsRoot('config/webpack.config.js'),
  // end: react-scripts context

  // start: app context
  appConfig: resolveAppRoot('config'),
  appPackageJson: resolveAppRoot('package.json'),
  appDisabledEslintrc: resolveAppRoot('eslintrc'),
  appEnabledEslintrc: resolveAppRoot('.eslintrc'),
  // end: app context
});
// @remove-on-eject-end

module.exports = paths;
