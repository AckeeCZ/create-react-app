'use strict';

const fs = require('fs-extra');
const paths = require('../../config/paths');

(async function() {
  try {
    console.log('[postpublish] removing temp files...');
    await fs.remove(paths.temp.root);
    console.log('[postpublish] temp files removed');
  } catch (e) {
    console.error('After publish clean up faield.');
  }
})();
