'use strict';

const { execSync } = require('child_process');

module.exports = () => {
  const dependencies = {
    'fs-extra': '8.1.0',
    'prettier-config-ackee': '0.0.13',
  };

  const packages = Object.entries(dependencies).map(
    ([name, version]) => `${name}@${version}`
  );

  console.log(
    `[beforeInstall] Installing ${
      packages.length
    } beforeInstall dependencies...`
  );

  const command = `npm i`;
  const args = [...packages, '--no-package-lock', '--no-save'].join(' ');

  execSync(`${command} ${args}`);
};
