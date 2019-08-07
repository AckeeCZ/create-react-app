import {
    combineReducers,
    formReducer,
    translateReducer,
    connectRouterWithHistory,
    reducers,
    sentryReducer,
} from '../dependencies';

export default combineReducers({
    ...reducers,
    translate: translateReducer,
    form: formReducer,
    router: connectRouterWithHistory,
    sentry: sentryReducer,
});
