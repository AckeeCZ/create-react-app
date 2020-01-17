import { authApi, Config } from 'modules/auth/dependencies';

export default function* getAuthUser() {
    const response = yield authApi.get(Config.api.me);

    return response.data;
}
