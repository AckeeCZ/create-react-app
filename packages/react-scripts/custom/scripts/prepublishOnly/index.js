'use strict';

const { execSync } = require('child_process');
const fs = require('fs-extra');
const paths = require('../../config/paths');

const transformPackageJson = require('./transformPackageJson');

(async function() {
  try {
    console.log(
      '[prepublishOnly] creating files for publishing in temp directory...'
    );
    await fs.copy(paths.root, paths.temp.root);

    console.log('[prepublishOnly] update package.json in temp directory...');
    await transformPackageJson();
  } catch (e) {
    console.error(e);
    execSync('node ../postpublish');
  }
})();
