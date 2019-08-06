'use strict';

const fs = require('fs-extra');

const paths = require('./paths');

module.exports = async function transformPackageJson() {
  // transform react-scripts/package.json
  const [packageJson, customPackgeJson] = await Promise.all([
    fs.readJSON(paths.packageJson),
    fs.readJSON(paths.customPackgeJson),
  ]);

  // TODO: merge customPackageJson to packageJson
};
