import { compose, reduxForm, Config, connect, submitForm, injectIntl } from '../../dependencies';

import LoginForm from '../../components/LoginForm';
import { loginForm } from '../../services/actions';

import validate from './LoginForm.validate';

export default compose(
    connect(null, {
        onSubmit: submitForm(Config.forms.login, loginForm),
    }),
    injectIntl,
    reduxForm({
        form: Config.forms.login,
        validate,
    })
)(LoginForm);
