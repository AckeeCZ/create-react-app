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

const invalidTargetValueError = value =>
  new Error(
    `Received invalid --target value: '${value}', choose one of: ${Object.values(
      Target
    ).join(', ')}`
  );

const getNodeEnv = targetValue => {
  switch (targetValue) {
    case Target.DEVELOPMENT:
      return 'development';

    case Target.STAGE:
    case Target.PRODUCTION:
      return 'production';

    default:
      throw invalidTargetValueError(targetValue);
  }
};

const getBuildEnv = targetValue => {
  switch (targetValue) {
    case Target.DEVELOPMENT:
    case Target.STAGE:
    case Target.PRODUCTION:
      return targetValue;

    default:
      throw invalidTargetValueError(targetValue);
  }
};

function getCustomEnvVariables() {
  const target = getTargetValue(process.argv.slice(2)) || Target.DEVELOPMENT;

  return {
    BUILD_ENV: getBuildEnv(target),
    NODE_ENV: getNodeEnv(target),
  };
}

module.exports = getCustomEnvVariables;
