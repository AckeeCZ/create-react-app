'use strict';

const { execSync } = require('child_process');

const authModulePrompt = require('./useAuthModule');
const mergeObjects = require('./mergeObjects');

exports.installDependencies = require('./installDependencies');
exports.renameEslintConfig = require('./renameEslintConfig');

exports.gitCommitAmend = () => {
  const ignore = {
    stdio: 'ignore',
  };

  try {
    execSync('git add -A', ignore);
    execSync('git commit --amend --no-edit && exit 0', ignore);
  } catch (e) {
    console.error(e);
  }
};

exports.modifyAppPackageJson = async (appPackage, templateJson) => {
  Object.assign(appPackage, templateJson, {
    dependencies: mergeObjects(
      appPackage.dependencies,
      templateJson.dependencies
    ),
    devDependencies: mergeObjects(
      appPackage.devDependencies,
      templateJson.devDependencies
    ),
    scripts: mergeObjects(appPackage.scripts, templateJson.scripts),
  });

  // eslint config is defined in separe file
  delete appPackage.eslintConfig;

  await authModulePrompt(appPackage);
};
