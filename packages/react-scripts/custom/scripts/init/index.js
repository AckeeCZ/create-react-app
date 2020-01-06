'use strict';

const sortByKey = require('../uitls/sortByKey');

const authModulePrompt = require('./useAuthModule');
const mergeObjects = require('./mergeObjects');

exports.installDependencies = require('./installDependencies');
exports.renameEslintConfig = require('./renameEslintConfig');

exports.modifyAppPackageJson = async ({
  appPackage,
  templateJson,
  templatePath,
}) => {
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

  await authModulePrompt({ appPackage, templatePath });

  Object.assign(appPackage, sortByKey(appPackage));
};
