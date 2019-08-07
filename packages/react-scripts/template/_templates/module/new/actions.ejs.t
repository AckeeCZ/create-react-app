---
to: src/modules/<%= name %>/services/actions.js
---
import types from './actionTypes';

export const fetchDataRequest = () => ({
    type: types.FETCH_DATA_REQUEST,
});

export const fetchDataSuccess = data => ({
    type: types.FETCH_DATA_SUCCESS,
    payload: data,
});

export const fetchDataFailure = error => ({
    type: types.FETCH_DATA_FAILURE,
    error,
})
