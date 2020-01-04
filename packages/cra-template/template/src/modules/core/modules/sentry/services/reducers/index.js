import { types } from '../actions';

const initialState = {
    eventId: null,
};

export default function sentryReducer(state = initialState, action) {
    switch (action.type) {
        case types.SET_SENTRY_EVENT_ID: {
            const { eventId } = action.payload;

            return {
                ...state,
                eventId,
            };
        }

        default:
            return state;
    }
}
