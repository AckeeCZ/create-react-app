import { merge } from 'lodash';

// eslint-disable-next-line
const envConfig = require(`./config.${process.env.REACT_APP_BUILD_ENV}.ts`).default;

const defaults = {
    // default configuration goes here
    appName: process.env.REACT_APP_NAME,
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
