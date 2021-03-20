'use strict';

const Target = {
  DEVELOPMENT: 'development',
  STAGE: 'stage',
  PRODUCTION: 'production',
};

const invalidEnvValueError = value =>
  new Error(
    `Received invalid REACT_APP_BUILD_ENV value: '${value}', choose one of: ${Object.values(
      Target
    ).join(', ')}`
  );

const getBuildEnv = () => {
  const env = process.env.REACT_APP_BUILD_ENV;

  switch (env) {
    case Target.DEVELOPMENT:
    case Target.STAGE:
    case Target.PRODUCTION:
      return env;

    default:
      throw invalidEnvValueError(env);
  }
};

module.exports = getBuildEnv;
