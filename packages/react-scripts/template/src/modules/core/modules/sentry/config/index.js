import {
    Sentry,
    Config,
    createSentryMiddleware,
    Log,
    // @use-auth-module-begin
    authUserSelector,
    // @use-auth-module-end
} from '../dependencies';

const options = {
    dsn: Config.sentry.dsn,
    debug: false,
    environment: process.env.NODE_ENV,
    release: `${process.env.REACT_APP_NAME}@${process.env.REACT_APP_VERSION}`,
};

if (!options.dsn && window) {
    const projectName = window.encodeURIComponent(Config.appName);
    const url = `https://sentry.ackee.cz/settings/ackee-production/projects/${projectName}/keys/`;

    Log.warn(`[Sentry]: Add your project 'dsn' to 'src/config/config.js.\n${url}`);
}

export const initializeSentry = () => {
    const init = () => Sentry.init(options);

    window && window.requestIdleCallback ? window.requestIdleCallback(init) : init();
};

// docs: https://github.com/vidit-sh/redux-sentry-middleware#sentry-middleware-for-redux
export const sentryMiddleware = createSentryMiddleware(Sentry, {
    // !!! YOU MAY NOT WANT TO SEND SOME SENSITIVE DATA TO SENTRY
    actionTransformer: action => action,
    stateTransformer: state => state,
    // @use-auth-module-begin
    getUserContext: authUserSelector,
    // @use-auth-module-end
});
