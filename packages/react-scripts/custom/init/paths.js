'use strict';

const path = require('path');

const rootPath = path.resolve(__dirname, '../../');
const resolveRoot = file => path.resolve(rootPath, file);

const paths = {
  root: rootPath,
  packageJson: resolveRoot('package.json'),
  customPackgeJson: resolveRoot('custom/package.json'),
};

module.exports = paths;
