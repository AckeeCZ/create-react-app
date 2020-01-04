import { Petrus, Log } from '../dependencies';

import authenticate from '../services/sagas/authenticate';
import refreshTokens from '../services/sagas/refreshTokens';
import getAuthUser from '../services/sagas/getAuthUser';

// docs: https://github.com/AckeeCZ/petrus#configureconfig-object--object
const { saga, reducer } = Petrus.configure({
    handlers: {
        authenticate,
        refreshTokens,
        getAuthUser,
    },
    tokens: {
        // Must be true if you need authApi from `@ackee/antonio`, set to false otherwise.
        applyAccessTokenExternally: true,
    },
    initialState: {},
    logger: Log,
});

export { saga, reducer };
