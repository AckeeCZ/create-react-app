'use strict';

const fs = require('fs-extra');
const { execSync } = require('child_process');
const paths = require('../../config/paths');

const { version } = fs.readSync(paths.packageJson);
const [tag] = version.match(/beta|alpha/) || ['latest'];

execSync(`npm publish ${paths.temp.root} --tag ${tag} --dry-run`);
