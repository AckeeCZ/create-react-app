export const isEnvDevelopment = process.env.NODE_ENV === 'development';
export const isEnvProduction = process.env.NODE_ENV === 'production';

export const isServerEnv = typeof window === 'undefined';
