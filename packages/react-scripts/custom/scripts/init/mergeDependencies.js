'use strict';

const sortByKey = require('../utils/sortByKey');

const mergeDependencies = (currentDependencies = {}, newDependencies = {}) =>
  sortByKey({
    ...newDependencies,
    ...currentDependencies,
  });

module.exports = mergeDependencies;
