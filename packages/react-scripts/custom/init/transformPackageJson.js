'use strict';

const fs = require('fs-extra');
const paths = require('./paths');

module.exports = async function transformPackageJson() {
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

  await fs.writeFile(paths.packageJson, formattedFileContent);
};
