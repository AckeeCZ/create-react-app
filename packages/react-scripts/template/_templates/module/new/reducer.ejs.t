---
to: src/modules/<%= name %>/services/reducer.js
---
import types from './actionTypes';

const initialState = {
    isFetching: false,
    error: null,
    data: null,
};

export default function(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_DATA_REQUEST:
            return {
                ...state,
                isFetching: true,
                error: null,
            };

        case types.FETCH_DATA_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.payload,
            };

        case types.FETCH_DATA_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.error,
            };

        default:
            return state;
    }
}
