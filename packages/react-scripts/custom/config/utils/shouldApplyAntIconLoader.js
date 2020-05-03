'use strict';

const semver = require('semver');

const paths = require('../paths');

// 'antd' must be available and below '4.0.0' version
module.exports = () => {
  const appPackageJson = require(paths.appPackageJson);
  const antdKey = 'antd';
  const antdVersion =
    appPackageJson.dependencies[antdKey] ||
    appPackageJson.devDependencies[antdKey];

  return antdVersion && semver.lt(semver.coerce(antdVersion), '4.0.0');
};
