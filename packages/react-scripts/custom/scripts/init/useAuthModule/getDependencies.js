'use strict';

const path = require('path');

module.exports = templatePath => {
  const templateSrc = path.resolve(templatePath, 'template/src');
  const resolveTemplateSrc = file => path.resolve(templateSrc, file);

  return {
    files: [
      resolveTemplateSrc('config/antonio/index.js'),
      resolveTemplateSrc('services/sagas/modules/index.js'),
      resolveTemplateSrc('services/sagas/index.js'),
      resolveTemplateSrc('services/reducers/index.js'),
      resolveTemplateSrc('modules/application/dependencies.js'),
      resolveTemplateSrc('modules/application/components/App.jsx'),
      resolveTemplateSrc('modules/core/modules/sentry/config/index.js'),
      resolveTemplateSrc('modules/core/modules/sentry/dependencies.js'),
      resolveTemplateSrc('modules/sharedDependencies.js'),
    ],
    directories: [resolveTemplateSrc('modules/auth')],
    packageJson: {
      dependencies: ['@ackee/petrus'],
    },
  };
};
