import firewall from '../HOC/firewall';
import LoginForm from '../containers/LoginForm';
import AuthContent from './AuthContent';

export default firewall(AuthContent, LoginForm);
