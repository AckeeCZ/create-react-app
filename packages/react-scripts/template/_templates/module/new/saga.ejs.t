---
to: src/modules/<%= name %>/services/saga.js
---
import {
    sagaEffects,
    api, 
    config,
} from '../dependencies';

import { fetchDataSuccess, fetchDataFailure } from './actions';
import types from './actionTypes';

const { put, all, takeLeading } = sagaEffects;

function* handleRequest(action) {
    try {
        const data = yield api.get(
            config.api.ENDPOINT,
            {
                uriParams: {

                },
            }
        );
        yield put(fetchDataSuccess(data));
    } catch (e) {
        yield put(fetchDataFailure(e.message));
    }
}

export default function* () {
    yield takeLeading(types.FETCH_DATA_REQUEST, handleRequest);
}
