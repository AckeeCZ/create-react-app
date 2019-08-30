'use strict';

const installDependencies = require('./installDependencies');

(async () => {
  try {
    installDependencies();

    const transformPackageJson = require('./transformPackageJson');

    await transformPackageJson();
  } catch (e) {
    console.error(e);
  }
})();
