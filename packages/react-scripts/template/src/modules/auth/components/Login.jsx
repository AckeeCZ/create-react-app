import { Petrus } from '../dependencies';

import AuthLoader from './AuthLoader';
import AuthContent from '../containers/AuthContent';
import LoginForm from '../containers/LoginForm';

export default Petrus.authorizable(AuthContent, LoginForm, AuthLoader);
