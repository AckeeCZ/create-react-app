'use strict';

require('./installDependencies');

const transformPackageJson = require('./transformPackageJson');

transformPackageJson().catch(console.error);
