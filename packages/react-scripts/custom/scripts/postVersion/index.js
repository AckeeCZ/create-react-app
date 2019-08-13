'use strict';

const { execSync } = require('child_process');
const fs = require('fs-extra');
const chalk = require('chalk');

const paths = require('../../../config/paths');

const ignore = {
  stdio: 'ignore',
};

const { name, version } = fs.readJSONSync(paths.appPackageJson);
const tag = `${name}@${version}`;

execSync('git add package.json', ignore);
execSync(`git commit -m "${tag}"`, ignore);

const lastCommitBuffer = execSync('git rev-parse HEAD');
const lastCommitHash = lastCommitBuffer.toString().replace('\n', '');

execSync(`git tag -a ${tag} ${lastCommitHash} -m "${tag}"`);

console.log(
  `
  Post version script succeed:
  - Version bumped to ${chalk.cyan(version)}.
  - ${chalk.cyan(tag)} tag created.
`
);
