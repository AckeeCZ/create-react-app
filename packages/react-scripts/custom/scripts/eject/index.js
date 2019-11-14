'use strict';

const fs = require('fs-extra');
const path = require('path');

const sortByKey = require('../utils/sortByKey');

exports.modifyPackageJson = appPackage => {
  appPackage.dependencies = sortByKey(appPackage.dependencies);
  appPackage.devDependencies = sortByKey(appPackage.devDependencies);

  const cmd = 'ackee-react-scripts';

  // 1. find scripts with the 'cmd' command
  // 2. replace the command with `node`
  // 3. replace the script name with path to script
  Object.entries(appPackage.scripts)
    .filter(([_, value]) => value.startsWith(cmd))
    .map(([scriptName, value]) => {
      const [_, rest] = value.split(cmd);
      const ejectedValue = `node${rest.replace(
        scriptName,
        `custom/scripts/${scriptName}/index.js`
      )}`;

      return [scriptName, ejectedValue];
    })
    .forEach(([key, value]) => (appPackage.scripts[key] = value));
};

// Make shallow array of files paths
function shallowFilesCopy(ownPath, folders) {
  return folders.reduce((files, folder) => {
    return files.concat(
      fs
        .readdirSync(path.join(ownPath, folder))
        // set full path
        .map(file => path.join(ownPath, folder, file))
        // omit dirs from file list
        .filter(file => fs.lstatSync(file).isFile())
    );
  }, []);
}

exports.selectFilesFromCustomDir = ({ ownPath, folders, files }) => {
  folders.push(
    'custom/config',
    'custom/config/plugins',
    'custom/config/utils',

    'custom/scripts',
    'custom/scripts/build',
    'custom/scripts/build/utils',
    'custom/scripts/check-circular-modules',
    'custom/scripts/transform',
    'custom/scripts/utils',

    'custom/utils'
  );

  files.push(path.join(ownPath, 'custom', '.gitignore'));

  files.push(...shallowFilesCopy(ownPath, folders));

  folders.unshift('custom');
};
