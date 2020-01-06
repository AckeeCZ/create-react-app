'use strict';

const fs = require('fs-extra');
const paths = require('../../config/paths');

module.exports = async function transformPackageJson() {
  console.log(
    '[beforeInstall] Injecting custom scripts, dependencies to package.json...'
  );
  if (!fs.existsSync(paths.packageJson)) {
    throw new Error(`paths.packageJson: ${paths.packageJson} file not found`);
  }

  if (!fs.existsSync(paths.templateJson)) {
    throw new Error(`paths.templateJson: ${paths.templateJson} file not found`);
  }

  // transform react-scripts/package.json
  const [packageJson, templateJson] = await Promise.all([
    fs.readJSON(paths.packageJson),
    fs.readJSON(paths.templateJson),
  ]);

  const finalPackageJson = {
    ...packageJson,
    ...templateJson,
    files: [...packageJson.files, ...templateJson.files],
    bin: {
      ...packageJson.bin,
      ...templateJson.bin,
    },
    dependencies: {
      ...packageJson.dependencies,
      ...templateJson.dependencies,
    },
    scripts: {
      ...packageJson.scripts,
      ...templateJson.scripts,
    },
  };

  const formattedFileContent = JSON.stringify(finalPackageJson, null, 2);

  return fs.writeFile(paths.packageJson, formattedFileContent);
};
