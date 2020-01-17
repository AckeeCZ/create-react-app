import { createStore, END, Consts } from '../dependencies';

import rootReducer from '../services/reducer';
import rootSaga from '../services/saga';

import configureEnhancer from './enhancer';

export default function configureStore() {
    const initialState = {};
    const { enhancer, sagaMiddleware } = configureEnhancer();

    const store = createStore(rootReducer, initialState, enhancer);

    store.runSaga = sagaMiddleware.run;
    store.close = () => store.dispatch(END);

    if (!Consts.isServerEnv) {
        store.runSaga(rootSaga);
    }

    return store;
}
