import { config, api } from 'Modules/auth/dependencies';

export default function* authenticate({ email, password }) {
    const response = yield api.post(config.api.signin, {
        email,
        password,
    });
    const { credentials, user } = response.data;

    return {
        tokens: credentials,
        user,
    };
}
