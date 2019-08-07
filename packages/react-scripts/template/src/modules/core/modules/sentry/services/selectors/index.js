import { createSelector } from '../../dependencies';

const sentrySelector = state => state.sentry;

export const sentryEventIdSelector = createSelector(
    sentrySelector,
    sentry => sentry.eventId,
);
