'use strict';

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

function removeMiniCSSExtractPlugin(plugins = []) {
  const pluginIndex = plugins.findIndex(
    plugin => plugin instanceof MiniCssExtractPlugin
  );

  if (pluginIndex >= 0) {
    plugins.splice(pluginIndex, 1);
  }
}

module.exports = removeMiniCSSExtractPlugin;
