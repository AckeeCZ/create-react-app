import { api, config } from 'modules/auth/dependencies';

export default function* refreshTokens({ refreshToken }) {
    const response = yield api.post(config.api.refresh, null, {
        params: {
            token: refreshToken.token,
        },
    });
    const { credentials } = response.data;

    return {
        accessToken: credentials.accessToken,
        refreshToken,
    };
}
