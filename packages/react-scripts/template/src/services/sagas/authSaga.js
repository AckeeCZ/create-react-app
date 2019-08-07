import { withAuthSession } from '@ackee/petrus';

// NOTE:
// this saga will be running only if user is authorized,
// and canceled on logout
function* authSaga() {}

export default function*() {
    yield withAuthSession(authSaga);
}
