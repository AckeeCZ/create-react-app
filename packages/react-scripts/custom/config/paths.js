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
  customTransformImportPath: resolveReactScriptsRoot(
    'custom/config/plugins/transformImportPath.js'
  ),

  prettierConfig: resolveReactScriptsRoot('template/prettier.config.js'),
  templateSrc: resolveReactScriptsRoot('template/src'),

  packageJson: resolveReactScriptsRoot('package.json'),

  // TODO: won't work after eject, use resolveAppRoot then
  webpackConfig: resolveReactScriptsRoot('config/webpack.config.js'),
  // @end: react-scripts context

  // @start: app context
  appWebpackConfig: resolveAppRoot('config/transformWebpackConfig.js'),
  appTransformImportPath: resolveAppRoot(
    'config/plugins/transformImportPath.js'
  ),
  appSrc: resolveAppRoot('src'),
  appPackageJson: resolveAppRoot('package.json'),
  appDisabledEslintrc: resolveAppRoot('eslintrc'),
  appEnabledEslintrc: resolveAppRoot('.eslintrc'),
  // @end: app context
};

module.exports = paths;
