import { createStore } from '../dependencies';
import rootReducer from '../services/reducer';
import configureEnhancer from './enhancer';

export default function configureStore() {
    const initialState = {};
    const { enhancer, runSagaMiddleware } = configureEnhancer();

    const store = createStore(rootReducer, initialState, enhancer);

    runSagaMiddleware();

    return store;
}
