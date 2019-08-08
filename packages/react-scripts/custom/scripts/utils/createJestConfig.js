'use strict';

exports.transformConfig = config => config;

exports.transformSupportedKeys = supportedKeys => {
  const customKeys = ['testPathIgnorePatterns'];
  return supportedKeys.concat(customKeys);
};
