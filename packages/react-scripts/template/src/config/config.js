import { merge } from 'lodash';
import * as constants from 'constants';

const { NODE_ENV, REACT_APP_NAME } = process.env;
// eslint-disable-next-line
const envConfig = require(`./config.${NODE_ENV}.js`).default;

const defaults = {
    // default configuration goes here
    appName: REACT_APP_NAME,
    devTools: constants.isEnvDevelopment,
    sentry: {
        // TODO: add PUBLIC 'dsn' of your project here:
        dsn: '',
    },
    api: {
        trips: '/v1/admin/trips',
        trip: '/v1/admin/trips/:id',
        signin: '/v1/auth/sign-in',
        signup: '/v1/auth/sign-up',
        me: '/v1/users/me',
        refresh: '/v1/auth/refresh',
    },
    forms: {
        login: 'loginForm',
    },
};

export default merge(defaults, envConfig);
