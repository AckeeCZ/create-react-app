'use strict';

exports.getTargetValue = (args = []) => {
  const argKey = '--target=';
  const targetArg = args.find(val => val.startsWith(argKey));

  return targetArg ? targetArg.replace(argKey, '') : targetArg;
};

exports.getNodeEnv = targetValue => {
  switch (targetValue) {
    case 'development':
    case 'stage':
      return 'development';
    default:
      return 'production';
  }
};

exports.getBuildEnv = targetValue => {
  switch (targetValue) {
    case 'development':
    case 'stage':
      return targetValue;
    default:
      return 'production';
  }
};
