import { Petrus, Loader } from '../dependencies';

export default function firewall(AuthContent, PublicContent) {
    return Petrus.authorizable(AuthContent, PublicContent, Loader);
}
