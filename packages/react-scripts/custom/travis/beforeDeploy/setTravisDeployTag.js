'use strict';

const fs = require('fs-extra');
const { execSync } = require('child_process');
const paths = require('../../config/paths');

const { version } = fs.readJSONSync(paths.packageJson);
const [tag] = version.match(/beta|alpha/) || ['latest'];

try {
  console.log(`[prepublish] Setting DEPLOY_TAG env. var. to ${tag}...`);
  execSync(`export DEPLOY_TAG="${tag}"`);
} catch (e) {
  console.error(e);
}
