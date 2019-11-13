import { createSelector, Petrus } from '../../dependencies';

export const authUserSelector = createSelector(
    Petrus.entitiesSelector,
    auth => auth.user
);

export const userEmailSelector = createSelector(
    authUserSelector,
    user => (user ? user.email : '')
);
