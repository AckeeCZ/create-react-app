'use strict';

const findOneOf = require('./findOneOf');

function removeStyleLoader(rules) {
  const oneOf = findOneOf(rules);

  const styleLoaders = oneOf.filter(loader => Array.isArray(loader.use));

  const targetLocations = [];
  const styleLoaderPath = require.resolve('style-loader');

  // Find 'style-loader' in style loaders
  styleLoaders.forEach((loader, loaderIndex) => {
    const targetIndex = loader.use.findIndex(
      subLoader => subLoader === styleLoaderPath
    );

    if (targetIndex >= 0) {
      targetLocations.push([loaderIndex, targetIndex]);
    }
  });

  // Delete 'style-loader' from style loaders
  for (const [loaderIndex, targetIndex] of targetLocations) {
    styleLoaders[loaderIndex].use.splice(targetIndex, 1);
  }
}

module.exports = removeStyleLoader;
