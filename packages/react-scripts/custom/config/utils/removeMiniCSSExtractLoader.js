'use strict';

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const findOneOf = require('./findOneOf');

module.exports = rules => {
  const oneOf = findOneOf(rules);

  const styleLoaders = oneOf.filter(loader => Array.isArray(loader.use));

  const targetLocations = [];

  // Find MiniCssExtractPlugin.loader in style loaders
  styleLoaders.filter((loader, loaderIndex) => {
    const targetIndex = loader.use.findIndex(
      styleLoader => styleLoader.loader === MiniCssExtractPlugin.loader
    );

    if (targetIndex >= 0) {
      targetLocations.push([loaderIndex, targetIndex]);
    }
  });

  // Delete MiniCssExtractPlugin.loader from style loaders
  for (const [loaderIndex, targetIndex] of targetLocations) {
    styleLoaders[loaderIndex].use.splice(targetIndex, 1);
  }
};
