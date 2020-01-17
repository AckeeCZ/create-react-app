import { merge } from 'lodash';
import { isEnvDevelopment } from 'constants/index';

const { NODE_ENV, REACT_APP_NAME } = process.env;
// eslint-disable-next-line
const envConfig = require(`./config.${NODE_ENV}.ts`).default;

const defaults = {
    // default configuration goes here
    appName: REACT_APP_NAME,
    devTools: isEnvDevelopment,
    sentry: {
        // TODO: add PUBLIC 'dsn' of your project here:
        dsn: '',
    },
    api: {
        signIn: '/v1/auth/sign-in',
        me: '/v1/users/me',
        refresh: '/v1/auth/refresh',
    },
    forms: {
        login: 'loginForm',
    },
};

export default merge(defaults, envConfig);
