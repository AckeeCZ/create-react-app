'use strict';

const { execSync } = require('child_process');

console.log(`[prepublish] Installing dependencies...`);
execSync('npm i fs-extra');

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
