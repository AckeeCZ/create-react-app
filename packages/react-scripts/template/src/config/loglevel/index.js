import * as loglevel from 'loglevel';
import * as Sentry from '@sentry/browser';
import { isEnvProduction } from 'consts';

isEnvProduction ? loglevel.disableAll() : loglevel.enableAll();

export const { warn, info, trace, debug } = loglevel;

export const error = err => {
    loglevel.error(err);
    Sentry.captureException(err);
};
