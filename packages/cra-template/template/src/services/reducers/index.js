import { reducer as formReducer } from 'redux-form';
// @use-auth-module-begin
import { reducer as auth } from 'modules/auth';
// @use-auth-module-end

// NOTE:
// Do not use combineReducers() here,
// export reducers as plain object, not as a function.
const reducers = {
    // @use-auth-module-begin
    auth,
    // @use-auth-module-end
    form: formReducer,
};

export default reducers;
