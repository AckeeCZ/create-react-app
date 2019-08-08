'use strict';

// const path = require('path');
const prettier = require('prettier');

module.exports = function formatCode(input) {
  const options = require('prettier-config-ackee');

  const stringifiedInput =
    typeof input === 'string' ? input : JSON.stringify(input, null, 2);

  return prettier.format(stringifiedInput, {
    parse: 'babel',
    ...options,
  });
};
