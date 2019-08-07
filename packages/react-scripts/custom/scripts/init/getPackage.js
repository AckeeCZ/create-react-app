'use strict';

const path = require('path');
const fs = require('fs-extra');

const getPackage = ownPath => {
  const templateDependenciesPath = path.join(ownPath, 'template/package.json');
  const pkg = require(templateDependenciesPath);
  const pkgCopy = { ...pkg };

  fs.removeSync(templateDependenciesPath);

  return pkgCopy;
};

module.exports = getPackage;
