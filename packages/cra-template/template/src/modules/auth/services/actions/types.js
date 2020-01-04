import { createAsyncType } from '../../dependencies';

const asyncType = createAsyncType({
    modulePrefix: 'auth',
});

export default {
    ...asyncType({
        types: ['LOGIN_FORM'],
    }),
};
