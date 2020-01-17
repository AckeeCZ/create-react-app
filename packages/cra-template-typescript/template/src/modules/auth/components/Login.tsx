import firewall from '../HOC/firewall';
import AuthContent from '../containers/AuthContent';
import LoginForm from '../containers/LoginForm';

export default firewall(AuthContent, LoginForm);
