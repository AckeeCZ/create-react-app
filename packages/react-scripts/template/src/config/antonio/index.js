import { create } from '@ackee/antonio';

import config from 'Config';

const {
    api,
    // @use-auth-module-begin
    authApi,
    // @use-auth-module-end
    saga,
} = create(
    {
        baseURL: config.api.base,
    },
    {
        // manageAuthUser: false
    },
);

export {
    api,
    // @use-auth-module-begin
    authApi,
    // @use-auth-module-end
    saga,
};
