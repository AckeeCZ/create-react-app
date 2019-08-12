'use strict';

const isNotProd = process.env.BABEL_ENV !== 'production';

function replaceImportPath(originalPath) {
  if (isNotProd || !originalPath.startsWith('antd/lib/')) {
    return originalPath;
  }

  return originalPath.replace('/lib/', '/es/');
}

module.exports = replaceImportPath;
