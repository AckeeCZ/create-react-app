'use strict';

const fs = require('fs-extra');
const paths = require('../../config/paths');

module.exports = async function transformPackageJson() {
  if (!fs.existsSync(paths.packageJson)) {
    throw new Error(`${paths.packageJson} file not found`);
  }

  if (!fs.existsSync(paths.customPackgeJson)) {
    throw new Error(`${paths.customPackgeJson} file not found`);
  }

  // transform react-scripts/package.json
  const [packageJson, customPackgeJson] = await Promise.all([
    fs.readJSON(paths.packageJson),
    fs.readJSON(paths.customPackgeJson),
  ]);

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

  return fs.writeFile(paths.packageJson, formattedFileContent);
};
