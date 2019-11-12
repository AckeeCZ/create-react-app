'use strict';

const fs = require('fs-extra');
const paths = require('../../config/paths');

module.exports = async function rewriteReadme() {
  console.log('[beforeInstall] Rewriting react-scripts/README.md...');
  if (!fs.existsSync(paths.readme)) {
    throw new Error(`paths.readme: ${paths.readme} file not found`);
  }

  if (!fs.existsSync(paths.customReadme)) {
    throw new Error(`paths.customReadme: ${paths.customReadme} file not found`);
  }

  const file = await fs.readFile(paths.customReadme);

  return fs.writeFile(paths.readme, file);
};
