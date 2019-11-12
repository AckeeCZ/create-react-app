'use strict';

const { execSync } = require('child_process');
const fs = require('fs-extra');
const chalk = require('chalk');

const paths = require('../../config/paths');

const ignore = {
  stdio: 'ignore',
};

try {
  console.log('[postversion] Reading current package name and version...');
  const { name, version } = fs.readJSONSync(paths.appPackageJson);
  const tag = `${name}@${version}`;

  if (!name) {
    throw new Error(`[postversion] Package name is undefined.`);
  }

  console.log(`[postversion] Commiting new version ${tag}...`);
  execSync('git add package.json', ignore);
  execSync(`git commit -m "${tag}"`, ignore);

  const lastCommitBuffer = execSync('git rev-parse HEAD');
  const lastCommitHash = lastCommitBuffer.toString().replace('\n', '');

  console.log(`[postversion] Creating Git tag ${tag}...`);
  execSync(`git tag -a ${tag} ${lastCommitHash} -m "${tag}"`);

  console.log(
    `
  Post version script succeed:
  - Version bumped to ${chalk.cyan(version)}.
  - ${chalk.cyan(tag)} tag created.
`
  );
} catch (e) {
  console.error(e);
}
