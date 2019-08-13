'use strict';

const fs = require('fs-extra');
const paths = require('../../config/paths');

const transformPackageJson = require('./transformPackageJson');

(async function() {
  await fs.copy(paths.root, paths.temp.root);

  await transformPackageJson();
})();
