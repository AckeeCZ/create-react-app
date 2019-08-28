#!/usr/bin/env

'use strict';

const transformPackageJson = require('./transformPackageJson');

(async function() {
  try {
    console.log(
      '[prepublish] injecting custom scripts, dependencies to package.json...'
    );
    await transformPackageJson();
  } catch (e) {
    console.error(e);
  }
})();
