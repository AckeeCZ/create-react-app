'use strict';

require('./installDependencies');
require('./setTravisDeployTag');

const transformPackageJson = require('./transformPackageJson');

transformPackageJson().catch(console.error);
