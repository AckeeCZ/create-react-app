'use strict';

const { execSync } = require('child_process');
const { defaultBrowsers } = require('react-dev-utils/browsersHelper');

const { authModulePrompt } = require('./useAuthModule');

const installDependencies = require('./utils/installDependencies');
const mergeDependencies = require('./mergeDependencies');
const deleteObjectKeys = require('./deleteObjectKeys');
const getPackage = require('./getPackage');

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

exports.modifyTemplatePackageJson = async (ownPath, appPackage) => {
  const ownPackage = getPackage(ownPath);

  const excludeFromJsonPackage = await authModulePrompt(ownPath);

  // Copy over some of the dependencies
  const dependencies = mergeDependencies(
    appPackage.dependencies,
    ownPackage.dependencies
  );

  appPackage.dependencies = deleteObjectKeys(
    dependencies,
    excludeFromJsonPackage.dependencies
  );

  const devDependencies = mergeDependencies(
    appPackage.devDependencies,
    ownPackage.devDependencies
  );

  appPackage.devDependencies = deleteObjectKeys(
    devDependencies,
    excludeFromJsonPackage.devDependencies
  );

  appPackage.scripts = deleteObjectKeys(
    ownPackage.scripts,
    excludeFromJsonPackage.scripts
  );

  // eslint config is defined in separe file
  delete appPackage.eslintConfig;

  // Setup the browsers list
  appPackage.browserslist = defaultBrowsers;

  // add rest of ownPackage to appPackage
  const appPackageUsedKeys = new Set(Object.keys(appPackage));
  for (const [key, value] of Object.entries(ownPackage)) {
    if (!appPackageUsedKeys.has(key)) {
      appPackage[key] = value;
    }
  }

  return appPackage;
};

exports.installDependencies = installDependencies;
