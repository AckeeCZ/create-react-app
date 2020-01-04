import { compose, reduxForm, Config, connect, submitForm } from '../dependencies';

import LoginForm from '../components/LoginForm';
import { loginForm } from '../services/actions';

const submitLoginForm = submitForm(Config.forms.login, loginForm);

const mapDispatchToProps = {
    onSubmit: submitLoginForm,
};

const validate = (values = {}) => {
    const errors = {};

    if (!values.email) {
        errors.email = 'Required';
    }
    if (!values.password) {
        errors.password = 'Required';
    }

    return errors;
};

const formCofig = {
    form: Config.forms.login,
    validate,
};

export default compose(
    connect(
        null,
        mapDispatchToProps
    ),
    reduxForm(formCofig)
)(LoginForm);
