'use strict';

const fs = require('fs-extra');
const { execSync } = require('child_process');
const paths = require('../../config/paths');

const { version } = fs.readJSONSync(paths.packageJson);
const [tag] = version.match(/beta|alpha/) || ['latest'];

try {
  console.log(`[publish] Publishing ${paths.temp.root} with ${tag} tag...`);
  execSync(`npm publish ${paths.temp.root} --tag ${tag}`);
} catch (e) {
  console.error(e);
  execSync('node ../postpublish');
}
