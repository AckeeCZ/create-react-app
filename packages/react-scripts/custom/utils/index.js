'use strict';

const fs = require('fs-extra');

exports.safeRequire = path => {
  return fs.pathExistsSync(path) ? require(path) : null;
};
