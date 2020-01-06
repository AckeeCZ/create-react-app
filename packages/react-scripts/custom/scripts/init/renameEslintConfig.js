'use strict';

const fs = require('fs-extra');
const path = require('path');

function renameEslintConfig(appPath) {
  const disabledEslintrc = path.resolve(appPath, 'eslintrc');
  const enabledEslintrc = path.resolve(appPath, '.eslintrc');

  return fs.rename(disabledEslintrc, enabledEslintrc);
}

module.exports = renameEslintConfig;
