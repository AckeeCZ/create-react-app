'use strict';

const fs = require('fs-extra');

const fileExists = file =>
  new Promise(res => {
    fs.access(file, fs.constants.F_OK, err => res([!err, file]));
  });

exports.getValidFiles = async (src = []) => {
  const results = await Promise.all(src.map(fileExists));

  return results.filter(result => result[0]).map(result => result[1]);
};
