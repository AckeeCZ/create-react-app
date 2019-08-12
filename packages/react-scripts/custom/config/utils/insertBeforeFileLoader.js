'use strict';

const findOneOf = require('./findOneOf');

module.exports = function insertBeforeFileLoader(rules, loaders) {
  const oneOfRule = findOneOf(rules);
  // file-loader is always the last loader
  const targetIndex = oneOfRule.length - 1;

  oneOfRule.splice(targetIndex, 0, ...loaders);
};
