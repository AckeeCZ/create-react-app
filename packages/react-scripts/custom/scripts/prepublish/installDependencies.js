'use strict';
const { execSync } = require('child_process');

console.log('[prepublish] Installing prepublish dependencies...');
execSync('npm i fs-extra --no-save --no-package-lock');
