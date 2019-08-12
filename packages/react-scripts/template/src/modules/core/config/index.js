import { consts } from '../dependencies';

export const plugins = {
    // Learn more about service workers: http://bit.ly/CRA-PWA
    serviceWorker: window && false,

    // Enable Sentry only in prouduction environment
    sentry: consts.isEnvProduction,
};
