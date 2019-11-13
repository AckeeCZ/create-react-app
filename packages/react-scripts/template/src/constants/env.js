const environments = {
    PRODUCTION: 'production',
    DEVELOPMENT: 'development',
};

export const isEnvDevelopment = process.env.NODE_ENV === environments.DEVELOPMENT;
export const isEnvProduction = process.env.NODE_ENV === environments.PRODUCTION;

export const isServerEnv = typeof window === 'undefined';
export const isDevServerEnv = process.env.REACT_APP_IS_DEV_SERVER === 'true';

export default environments;
