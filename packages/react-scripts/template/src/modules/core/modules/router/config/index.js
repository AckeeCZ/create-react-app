import {
    createBrowserHistory,
    routerMiddleware,
    connectRouter,
} from '../dependencies';

export const history = createBrowserHistory();

export const routerMiddlewareWithHistory = routerMiddleware(history);

export const connectRouterWithHistory = connectRouter(history);
