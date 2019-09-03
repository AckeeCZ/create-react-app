'use strict';

const path = require('path');

const rootPath = path.resolve(__dirname, '../../');
const resolveRoot = file => path.resolve(rootPath, file);

const paths = {
  root: resolveRoot('.'),
  packageJson: resolveRoot('package.json'),
  customPackageJson: resolveRoot('custom/package.json'),
  prettierConfig: resolveRoot('template/prettier.config.js'),
  templateSrc: resolveRoot('template/src'),
  custom: resolveRoot('custom'),
};

module.exports = paths;
