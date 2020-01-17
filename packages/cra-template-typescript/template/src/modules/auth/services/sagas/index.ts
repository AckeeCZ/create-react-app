import { sagaEffects } from 'modules/auth/dependencies';
import { saga as petrus } from '../../config/petrus';
import loginForm from './loginForm';

const { all } = sagaEffects;

export default function*() {
    yield all([loginForm(), petrus()]);
}
