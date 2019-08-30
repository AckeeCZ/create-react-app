'use strict';

const fs = require('fs-extra');
const paths = require('../../config/paths');

module.exports = async function transformPackageJson() {
  console.log(
    '[beforeInstall] injecting custom scripts, dependencies to package.json...'
  );
  if (!fs.existsSync(paths.packageJson)) {
    throw new Error(`paths.packageJson: ${paths.packageJson} file not found`);
  }

  if (!fs.existsSync(paths.customPackageJson)) {
    throw new Error(
      `paths.customPackageJson: ${paths.customPackageJson} file not found`
    );
  }

  // transform react-scripts/package.json
  const [packageJson, customPackageJson] = await Promise.all([
    fs.readJSON(paths.packageJson),
    fs.readJSON(paths.customPackageJson),
  ]);

  const finalPackageJson = {
    ...packageJson,
    ...customPackageJson,
    dependencies: {
      ...packageJson.dependencies,
      ...customPackageJson.dependencies,
    },
    scripts: {
      ...packageJson.scripts,
      ...customPackageJson.scripts,
    },
  };

  const formattedFileContent = JSON.stringify(finalPackageJson, null, 2);

  return fs.writeFile(paths.packageJson, formattedFileContent);
};
