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
  customTransformImportPath: resolveReactScriptsRoot(
    'custom/config/plugins/transformImportPath.js'
  ),

  webpackConfig: resolveAppRoot('config/webpack.config.js'),
  appWebpackConfig: resolveAppRoot('config/transformWebpackConfig.js'),
  appTransformImportPath: resolveAppRoot(
    'config/plugins/transformImportPath.js'
  ),
  appSrc: resolveAppRoot('src'),
});

// @remove-on-eject-beginning
// Paths before eject
Object.assign(paths, {
  customPackageJson: resolveReactScriptsRoot('custom/custom-package.json'),
  packageJson: resolveReactScriptsRoot('package.json'),
  webpackConfig: resolveReactScriptsRoot('config/webpack.config.js'),
});
// @remove-on-eject-end

module.exports = paths;
