'use strict';

exports.getTargetValue = (args = []) => {
  const argKey = '--target=';
  const targetArg = args.find(val => val.startsWith(argKey));

  return targetArg ? targetArg.replace(argKey, '') : targetArg;
};

const Target = {
  DEVELOPMENT: 'development',
  STAGE: 'stage',
  PRODUCTION: 'production',
};

exports.getNodeEnv = targetValue => {
  switch (targetValue) {
    case Target.DEVELOPMENT:
    case Target.STAGE:
      return 'development';
    default:
      return 'production';
  }
};

exports.getBuildEnv = targetValue => {
  switch (targetValue) {
    case Target.DEVELOPMENT:
    case Target.STAGE:
      return targetValue;
    default:
      return 'production';
  }
};
