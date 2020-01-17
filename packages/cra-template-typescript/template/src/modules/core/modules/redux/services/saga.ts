import { sagaEffects, saga, sentrySaga, localizationSaga } from '../dependencies';

const { all } = sagaEffects;

export default function* rootSaga() {
    yield all([sentrySaga(), localizationSaga(), saga()]);
}
