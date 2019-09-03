'use strict';

const path = require('path');
const chalk = require('chalk');
const paths = require('../../../config/paths');

const resolveTemplateSrc = file => path.resolve(paths.templateSrc, file);

module.exports = {
  useAuthModule: prompt(
    `Do you want to include the ${chalk.cyan('"auth"')} module?`,
    'Y/n',
    response => {
      const includeModule = ['y', 'y/n'].includes(response.toLowerCase());
      console.log(
        `> auth module ${chalk.cyan(
          includeModule ? 'was included' : 'was NOT included'
        )}`
      );
      return includeModule;
    }
  ),
  dependencies: {
    files: [
      resolveTemplateSrc('config/antonio/index.js'),
      resolveTemplateSrc('services/sagas/authSaga.js'),
      resolveTemplateSrc('services/sagas/modules/index.js'),
      resolveTemplateSrc('services/sagas/index.js'),
      resolveTemplateSrc('services/reducers/index.js'),
      resolveTemplateSrc('modules/application/dependencies.js'),
      resolveTemplateSrc('modules/application/components/App.jsx'),
      resolveTemplateSrc('modules/core/modules/sentry/config/index.js'),
      resolveTemplateSrc('modules/core/modules/sentry/dependencies.js'),
    ],
    directories: [resolveTemplateSrc('modules/auth')],
    jsonPackage: {
      dependencies: ['@ackee/petrus'],
      devDependencies: [],
      scripts: [],
    },
  },
};
