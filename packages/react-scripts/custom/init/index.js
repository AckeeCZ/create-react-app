'use strict';

const transformPackageJson = require('./transformPackageJson');

(async function() {
  await transformPackageJson();
})();
