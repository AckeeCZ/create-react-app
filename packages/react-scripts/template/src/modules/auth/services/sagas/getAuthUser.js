import { authApi, config } from 'modules/auth/dependencies';

export default function* getAuthUser() {
    const response = yield authApi.get(config.api.me);

    return response.data;
}
