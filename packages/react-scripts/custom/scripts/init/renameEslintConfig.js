'use strict';

const fs = require('fs-extra');
const paths = require('../../config/paths');

async function renameEslintConfig() {
  return fs.rename(paths.appDisabledEslintrc, paths.appEnabledEslintrc);
}

module.exports = renameEslintConfig;
