'use strict';

const fs = require('fs-extra');
const paths = require('../../config/paths');

(async function() {
  try {
    await fs.remove(paths.temp.root);
  } catch (e) {
    console.error('After publish clean up faield.');
  }
})();
