'use strict';

const spawn = require('react-dev-utils/crossSpawn');

const getCommandAndArgs = ({ useYarn, verbose }) => {
  const command = useYarn ? 'yarn' : 'npm';
  let args = ['install', '--loglevel', 'error'];

  if (verbose) {
    args.push('--verbose');
  }

  return {
    command,
    args,
  };
};

const execCommand = (command, args) => {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { stdio: 'inherit' });

    child.on('close', code => {
      if (code !== 0) {
        reject({
          command: `${command} ${args.join(' ')}`,
        });
        return;
      }
      resolve();
    });
  });
};

const logInfo = ({ dependencies, devDependencies }) => {
  console.log();
  let msg = `Installing`;

  if (devDependencies.length) {
    msg += ` ${devDependencies.length} initial devDependencies`;
  }

  if (devDependencies.length && dependencies.length) {
    msg += ` and `;
  }

  if (dependencies.length) {
    msg += `${dependencies.length} initial dependencies`;
  }

  msg += '...';
  console.log(msg);
};

const installDependencies = (packageJson = {}, customOptions = {}) => {
  const { useYarn, verbose } = {
    useYarn: false,
    verbose: false,
    ...customOptions,
  };

  const devDependencies = Object.entries(packageJson.devDependencies || {});
  const dependencies = Object.entries(packageJson.dependencies || {});

  if (devDependencies.length === 0 && dependencies.length) {
    return;
  }

  logInfo({ dependencies, devDependencies });

  const { command, args } = getCommandAndArgs({
    useYarn,
    verbose,
  });

  return execCommand(command, args);
};

module.exports = installDependencies;
