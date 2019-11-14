'use strict';

const { safeRequire } = require('../../utils');
const paths = require('../paths');
const customTransformImportPath = safeRequire(paths.appTransformImportPath);

const isNotProd = process.env.BABEL_ENV !== 'production';

function replaceImportPath(originalPath) {
  return originalPath.startsWith('antd/lib/')
    ? originalPath.replace('/lib/', '/es/')
    : originalPath;
}

module.exports = function(originalPath, callingFileName, options) {
  if (isNotProd) {
    return originalPath;
  }

  const transformedPath = replaceImportPath(
    originalPath,
    callingFileName,
    options
  );

  if (!customTransformImportPath) {
    return transformedPath;
  }

  return customTransformImportPath(transformedPath, callingFileName, options);
};
