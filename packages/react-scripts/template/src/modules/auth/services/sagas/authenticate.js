import { config, api } from 'modules/auth/dependencies';

export default function* authenticate({ email, password }) {
    const response = yield api.post(config.api.signIn, {
        email,
        password,
    });
    const { credentials, user } = response.data;

    return {
        tokens: credentials,
        user,
    };
}
