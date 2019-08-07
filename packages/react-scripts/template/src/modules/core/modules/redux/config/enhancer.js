import {
    applyMiddleware,
    compose,
    routerMiddlewareWithHistory,
    createSagaMiddleware,
    Sentry,
    sentryMiddleware,
    config,
    Log,
} from '../dependencies';

import rootSaga from '../services/saga';

export default function configureEnhancer() {
    const sagaMiddleware = createSagaMiddleware({
        onError(e) {
            Log.error(e);
            Sentry.captureException(e);
        },
    });

    const middlewares = [routerMiddlewareWithHistory, sagaMiddleware, sentryMiddleware];
    const enhancerArgs = [applyMiddleware(...middlewares)];

    if (config.devTools) {
        // eslint-disable-next-line
        const reduxDevTools = window && window.__REDUX_DEVTOOLS_EXTENSION__;
        enhancerArgs.push(reduxDevTools ? reduxDevTools() : r => r);
    }

    return {
        enhancer: compose(...enhancerArgs),
        runSagaMiddleware() {
            sagaMiddleware.run(rootSaga);
        },
    };
}
