'use strict';

const installDependencies = require('./installDependencies');

(async () => {
  try {
    installDependencies();

    const transformPackageJson = require('./transformPackageJson');
    const rewriteReadme = require('./rewriteReadme');

    await Promise.all([transformPackageJson(), rewriteReadme()]);
  } catch (e) {
    console.error(e);
  }
})();
