---
to: src/modules/<%= name %>/dependencies.js
---
export { createSelector } from 'reselect';

export { asyncType, strictObjectAccess } from '@ackee/redux-utils';

export { api } from 'config/antonio';

export * from 'Modules/sharedDependencies';
