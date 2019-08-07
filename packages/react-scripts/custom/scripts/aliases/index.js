'use strict';

const fs = require('fs-extra');

const paths = require('../../../config/paths');
const aliases = require('../../config/aliases');

const areObjectsEqual = (a = {}, b = {}) => {
  return JSON.stringify(a) === JSON.stringify(b);
};

// Inject aliases to appJsConfig (jsconfig.json) file
module.exports = async function setJsConfigAliases() {
  const jsConfig = await fs.readJSON(paths.appJsConfig);

  const nextPaths = {
    ...jsConfig.compilerOptions.paths,
    ...aliases.jsconfig(),
  };

  if (areObjectsEqual(jsConfig.compilerOptions.paths, nextPaths)) {
    return;
  }

  jsConfig.compilerOptions.paths = nextPaths;

  const formattedFileContent = JSON.stringify(jsConfig, null, 2);

  await fs.writeFile(paths.appJsConfig, formattedFileContent);
};
