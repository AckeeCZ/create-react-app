'use strict';

const installDependencies = require('./installDependencies');

(async () => {
  try {
    installDependencies();

    const transformPackageJson = require('./transformPackageJson');

    await Promise.all([transformPackageJson()]);
  } catch (e) {
    console.error(e);
  }
})();
