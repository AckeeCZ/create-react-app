'use strict';

const Target = {
  DEVELOPMENT: 'development',
  STAGE: 'stage',
  PRODUCTION: 'production',
};

const getTargetValue = (args = []) => {
  const argKey = '--target=';
  const targetArg = args.find(val => val.startsWith(argKey));

  return targetArg ? targetArg.replace(argKey, '') : targetArg;
};

const getNodeEnv = targetValue => {
  switch (targetValue) {
    case Target.DEVELOPMENT:
    case Target.STAGE:
      return 'development';
    default:
      return 'production';
  }
};

const getBuildEnv = targetValue => {
  if (Object.values(Target).includes(targetValue)) {
    return targetValue;
  }

  throw new Error(
    `Invalid --target value, choose one of: ${Object.values(Target).join(', ')}`
  );
};

function getCustomEnvVariables() {
  const target = getTargetValue(process.argv.slice(2)) || Target.DEVELOPMENT;

  return {
    BUILD_ENV: getBuildEnv(target),
    NODE_ENV: getNodeEnv(target),
  };
}

module.exports = getCustomEnvVariables;
