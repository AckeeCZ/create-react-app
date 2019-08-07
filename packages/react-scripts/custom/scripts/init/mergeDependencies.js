'use strict';

const sortByKey = require('./sortByKey');

const mergeDependencies = (currentDependencies = {}, newDependencies = {}) =>
  sortByKey({
    ...newDependencies,
    ...currentDependencies,
  });

module.exports = mergeDependencies;
