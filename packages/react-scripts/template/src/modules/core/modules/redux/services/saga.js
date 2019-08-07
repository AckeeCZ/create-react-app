import { sagaEffects, saga, sentrySaga, localizationSaga, antonio, formSaga } from '../dependencies';

const { all } = sagaEffects;

export default function* rootSaga() {
    yield all([sentrySaga(), localizationSaga(), antonio(), formSaga(), saga()]);
}
