const environments = {
    PRODUCTION: 'production',
    STAGE: 'stage',
    DEVELOPMENT: 'development',
};

export const currentEnv = process.env.REACT_APP_BUILD_ENV || process.env.NODE_ENV;

export const isEnvDevelopment = currentEnv === environments.DEVELOPMENT;
export const isEnvStage = currentEnv === environments.STAGE;
export const isEnvProduction = currentEnv === environments.PRODUCTION;

export const isServerEnv = typeof window === 'undefined';

export default environments;
