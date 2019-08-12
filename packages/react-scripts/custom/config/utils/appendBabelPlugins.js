'use strict';

const findOneOf = require('./findOneOf');

module.exports = function appendBabelPlugins(
  rules,
  babelPlugins,
  isBabelLoader = () => true
) {
  const babelLoader = require.resolve('babel-loader');
  const babel = findOneOf(rules).find(
    rule => rule.loader === babelLoader && isBabelLoader(rule)
  );

  if (!babel.options.plugins) {
    babel.options.plugins = [];
  }

  babel.options.plugins.push(...babelPlugins);
};
