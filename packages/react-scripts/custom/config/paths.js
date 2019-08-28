'use strict';

const path = require('path');

const rootPath = path.resolve(__dirname, '../../');
const resolveRoot = file => path.resolve(rootPath, file);

const paths = {
  root: resolveRoot('.'),
  packageJson: resolveRoot('package.json'),
};

console.log({ paths });

module.exports = paths;
