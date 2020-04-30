'use strict';

const compareEntryKeys = ([a], [b]) => a.localeCompare(b);

const sortByKey = (src = {}) => {
  const sortedEntries = Object.entries(src).sort(compareEntryKeys);

  const dest = {};
  for (const [key, value] of sortedEntries) {
    dest[key] = value;
  }
  return dest;
};

module.exports = sortByKey;
