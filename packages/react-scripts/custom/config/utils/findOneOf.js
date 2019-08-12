'use strict';

module.exports = function findOneOf(rules) {
  const rule = rules.find(rule => Array.isArray(rule.oneOf));

  return rule ? rule.oneOf : null;
};
