const environments = {
    PRODUCTION: 'production',
    DEVELOPMENT: 'development',
};

export const isEnvDevelopment = process.env.NODE_ENV === environments.DEVELOPMENT;
export const isEnvProduction = process.env.NODE_ENV === environments.PRODUCTION;

export default environments;
