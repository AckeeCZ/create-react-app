'use strict';

const fs = require('fs-extra');
const paths = require('../../config/paths');

module.exports = async function transformPackageJson() {
  // transform react-scripts/package.json
  const [packageJson, customPackgeJson] = await Promise.all([
    fs.readJSON(paths.temp.packageJson),
    fs.readJSON(paths.temp.customPackgeJson),
  ]);

  for (const key of [
    'postversion',
    'prepublishOnly',
    'publish',
    'postpublish',
  ]) {
    delete packageJson.scripts[key];
  }

  const finalPackageJson = {
    ...packageJson,
    ...customPackgeJson,
    dependencies: {
      ...packageJson.dependencies,
      ...customPackgeJson.dependencies,
    },
    scripts: {
      ...packageJson.scripts,
      ...customPackgeJson.scripts,
    },
  };

  const formattedFileContent = JSON.stringify(finalPackageJson, null, 2);

  return fs.writeFile(paths.temp.packageJson, formattedFileContent);
};