import { authApi, config } from 'Modules/auth/dependencies';

export default function* getAuthUser() {
    const response = yield authApi.get(config.api.me);

    return response.data;
}
