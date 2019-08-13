'use strict';

const { execSync } = require('child_process');
const fs = require('fs-extra');

const paths = require('../../../config/paths');

const ignore = {
  stdio: 'ignore',
};

try {
  const { name, version } = fs.readJSONSync(paths.appPackageJson);
  const tag = `${name}@${version}`;

  execSync('git add package.json', ignore);
  execSync(`git commit -m "${tag}"`, ignore);

  const lastCommitBuffer = execSync('git rev-parse HEAD');
  const lastCommitHash = lastCommitBuffer.toString().replace('\n', '');

  execSync(`git tag -a ${tag} ${lastCommitHash} -m "${tag}"`, ignore);
} catch (e) {
  console.error(e);
}
