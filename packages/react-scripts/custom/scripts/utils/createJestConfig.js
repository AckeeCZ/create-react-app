'use strict';

const aliases = require('../../config/aliases');

exports.transformConfig = config => {
  return {
    ...config,
    moduleNameMapper: {
      ...config.moduleNameMapper,
      ...aliases.jest(),
    },
  };
};

exports.transformSupportedKeys = supportedKeys => {
  const customKeys = ['testPathIgnorePatterns'];
  return supportedKeys.concat(customKeys);
};
