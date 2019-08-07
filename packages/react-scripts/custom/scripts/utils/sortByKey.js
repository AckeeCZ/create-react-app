'use strict';

const sortByKey = (src = {}) => {
  const entries = Object.entries(src);
  const sortedEntries = entries.sort(([a], [b]) => {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    }
    return 0;
  });

  const dest = {};

  for (const [key, value] of sortedEntries) {
    dest[key] = value;
  }

  return dest;
};

module.exports = sortByKey;
