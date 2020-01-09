'use strict';

const path = require('path');
const fs = require('fs-extra');
const prettier = require('prettier');

const getDependencies = require('./getDependencies');
const { getExistingFiles } = require('./utilities');

const createPrettierFormatter = async templatePath => {
  const prettierConfigPath = path.resolve(
    templatePath,
    'template/prettier.config.js'
  );
  const options = await prettier.resolveConfig(prettierConfigPath);

  if (!options) {
    throw new Error(
      `Prettier config couldn't be resolved: '${prettierConfigPath}'.`
    );
  }

  const mergedOptions = {
    parser: 'babel',
    ...options,
  };

  return content => prettier.format(content, mergedOptions);
};

// {/* ... */} or // ...
const BEGIN = /(\/\/|\{\/\*) @use-auth-module-begin(\s\*\/}$)?/gm;
const END = /(\/\/|\{\/\*) @use-auth-module-end(\s\*\/}$)?/gm;
const BEGIN_OR_END = /(\/\/|\{\/\*) @use-auth-module-(begin|end)(\s\*\/}$)?/gm;

/**
 * get content that is outside of @use-auth-module-begin and @use-auth-module-end comments
 * @param {String} content
 * @returns {String}
 */
const getActiveContent = (content = '') => {
  const rows = content.split('\n');
  const enabledRows = [];
  let withinRemovableBlock = false;

  for (const row of rows) {
    if (row.match(BEGIN_OR_END) || withinRemovableBlock) {
      if (row.match(BEGIN)) {
        withinRemovableBlock = true;
      }
      if (row.match(END)) {
        withinRemovableBlock = false;
      }
    } else {
      enabledRows.push(row);
    }
  }

  return enabledRows.join('\n');
};

module.exports = async (useAuthModule, { appPackage, templatePath }) => {
  let { files, directories, packageJson } = getDependencies(templatePath);

  if (!useAuthModule) {
    packageJson.dependencies.forEach(dependency => {
      delete appPackage.dependencies[dependency];
    });

    // delete directories
    const tasks = directories.map(dir => fs.remove(dir));

    await Promise.all(tasks);
  }

  const results = await Promise.all([
    createPrettierFormatter(templatePath),

    // filter out non-existing files
    getExistingFiles(files),
  ]);

  const prettierFormatter = results[0];
  files = results[1];

  if (useAuthModule) {
    // delete comments: @use-auth-module-begin, @use-auth-module-end
    for (const file of files) {
      let content = fs.readFileSync(file, 'utf8');

      content = content
        .split('\n')
        .filter(line => !line.match(BEGIN_OR_END))
        .join('\n');

      fs.writeFileSync(file, prettierFormatter(content));
    }
  } else {
    const removingTasks = [];

    for (const file of files) {
      let content = fs.readFileSync(file, 'utf8');

      if (content.match(BEGIN) === null) {
        // if file doesn't contain @use-auth-module-*, but it's placed
        // among a module dependencies, then remove the whole file
        removingTasks.push(fs.remove(file));
      } else {
        // otherwise just remove code within those comments
        content = getActiveContent(content);

        fs.writeFileSync(file, prettierFormatter(content));
      }
    }

    await Promise.all(removingTasks);
  }
};
