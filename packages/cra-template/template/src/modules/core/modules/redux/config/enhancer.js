import {
    applyMiddleware,
    compose,
    routerMiddlewareWithHistory,
    createSagaMiddleware,
    sentryMiddleware,
    Config,
    Log,
    Consts,
} from '../dependencies';

export default function configureEnhancer() {
    const sagaMiddleware = createSagaMiddleware({
        onError: Log.error,
    });

    const middlewares = [routerMiddlewareWithHistory, sagaMiddleware, sentryMiddleware];
    const enhancerArgs = [applyMiddleware(...middlewares)];

    if (Config.devTools && !Consts.isServerEnv) {
        // eslint-disable-next-line
        const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__;
        if (reduxDevTools) {
            enhancerArgs.push(reduxDevTools());
        }
    }

    return {
        enhancer: compose(...enhancerArgs),
        sagaMiddleware,
    };
}
