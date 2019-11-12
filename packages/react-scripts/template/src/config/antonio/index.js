import { create } from '@ackee/antonio';

import Config from 'config';

const {
    api,
    // @use-auth-module-begin
    authApi,
    // @use-auth-module-end
    saga,
} = create(
    {
        baseURL: Config.api.base,
    },
    {
        // manageAuthUser: false
    }
);

export {
    api,
    // @use-auth-module-begin
    authApi,
    // @use-auth-module-end
    saga,
};
