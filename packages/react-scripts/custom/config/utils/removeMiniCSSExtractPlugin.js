'use strict';

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

function removeMiniCSSExtractPlugin(plugins = []) {
  const pluginIndex = plugins.findIndex(
    plugin => plugin instanceof MiniCssExtractPlugin
  );

  plugins.splice(pluginIndex, 1);
}

module.exports = removeMiniCSSExtractPlugin;
