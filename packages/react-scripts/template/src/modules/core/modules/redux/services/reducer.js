import { combineReducers, translateReducer, connectRouterWithHistory, reducers, sentryReducer } from '../dependencies';

export default combineReducers({
    ...reducers,
    translate: translateReducer,
    router: connectRouterWithHistory,
    sentry: sentryReducer,
});
