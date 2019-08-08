'use strict';

module.exports = function appendBabelPlugins(
  rules,
  babelPlugins,
  isBabelLoader = () => true
) {
  const ruleOneOf = rules.find(rule => Array.isArray(rule.oneOf));
  const babelLoader = require.resolve('babel-loader');
  const babel = ruleOneOf.oneOf.find(
    rule => rule.loader === babelLoader && isBabelLoader(rule)
  );

  if (!babel.options.plugins) {
    babel.options.plugins = [];
  }

  babel.options.plugins.push(...babelPlugins);
};
