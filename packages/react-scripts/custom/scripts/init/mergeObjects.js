'use strict';

const sortByKey = require('../utils/sortByKey');

module.exports = function mergeObjects(...objects) {
  const result = objects.reduce(
    (prev, current) => Object.assign(prev, current),
    {}
  );

  return sortByKey(result);
};
