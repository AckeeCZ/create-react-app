'use strict';

module.exports = (src = {}, keys = []) => {
  const dest = { ...src };

  for (const key of keys) {
    delete dest[key];
  }

  return dest;
};
