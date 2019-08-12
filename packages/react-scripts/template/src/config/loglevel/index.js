import * as loglevel from 'loglevel';
import * as Sentry from '@sentry/browser';
import { isEnvProduction } from 'constants';

isEnvProduction ? loglevel.disableAll() : loglevel.enableAll();

export const { warn, info, trace, debug } = loglevel;

export const error = err => {
    loglevel.error(err);
    Sentry.captureException(err);
};
