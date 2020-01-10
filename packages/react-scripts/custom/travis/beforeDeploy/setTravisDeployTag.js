'use strict';

const fs = require('fs-extra');
const paths = require('../../config/paths');

const { version } = fs.readJSONSync(paths.packageJson);
const [tag] = version.match(/beta|alpha/) || ['latest'];

console.log(tag);
