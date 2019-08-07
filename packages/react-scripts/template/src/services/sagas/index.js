import { all } from 'redux-saga/effects';

// @use-auth-module-begin
import { saga as auth } from 'Modules/auth';

import authSaga from './authSaga';
// @use-auth-module-end

export default function* appSaga() {
    yield all([
        // @use-auth-module-begin
        auth(),
        authSaga(),
        // @use-auth-module-end
    ]);
}
