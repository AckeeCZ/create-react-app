'use strict';

const authModulePrompt = require('./useAuthModule');
const mergeObjects = require('./mergeObjects');

exports.renameEslintConfig = require('./renameEslintConfig');

exports.modifyAppPackageJson = async ({
  appPackage,
  templatePackage,
  templatePath
}) => {
  appPackage.devDependencies = mergeObjects(
    appPackage.devDependencies,
    templatePackage.devDependencies
  );

  // eslint config is defined in separe file
  delete appPackage.eslintConfig;

  await authModulePrompt({ appPackage, templatePath });

  return appPackage;
};

exports.updateTemplatePackageBlacklist = (backlist = []) => {
  const removeKeysFromBlacklist = ['devDependencies'];

  for (const key of removeKeysFromBlacklist) {
    const index = backlist.indexOf(key);
    if (index >= 0) {
      backlist.splice(index, 1);
    }
  }
};

exports.updateTemplatePackageToMerge = (toMerge = []) => {
  const addKeysToMerge = ['devDependencies'];

  toMerge.push(...addKeysToMerge);
};
