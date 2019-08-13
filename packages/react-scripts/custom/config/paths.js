'use strict';

const path = require('path');

const rootPath = path.resolve(__dirname, '../../');
const tempRootPath = path.resolve(rootPath, '../react-scripts-temp');

const resolveRoot = file => path.resolve(rootPath, file);

const resolveTempRoot = file => path.resolve(tempRootPath, file);

const paths = {
  root: resolveRoot('.'),
  packageJson: resolveRoot('package.json'),
  temp: {
    root: resolveTempRoot('.'),
    packageJson: resolveTempRoot('package.json'),
    customPackgeJson: resolveTempRoot('custom/package.json'),
  },
};

module.exports = paths;
