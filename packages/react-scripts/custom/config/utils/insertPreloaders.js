'use strict';

module.exports = function insertPreloaders(rules, preloaders) {
  const targetIndex = rules.findIndex(rule => rule.enforce === 'pre');

  if (targetIndex === -1) {
    rules.unshift(...preloaders);
  }

  rules.splice(targetIndex, 0, ...preloaders);
};
