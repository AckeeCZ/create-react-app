'use strict';

module.exports = function insertBeforeFileLoader(rules, loaders) {
  const oneOfRule = rules.find(rule => Array.isArray(rule.oneOf));
  // file-loader is always the last loader
  const targetIndex = oneOfRule.length - 1;

  oneOfRule.splice(targetIndex, 0, ...loaders);
};
