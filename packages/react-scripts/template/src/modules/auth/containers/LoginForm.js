import { compose, injectIntl, reduxForm, config, connect, bindActionCreators, submitForm } from '../dependencies';

import LoginForm from '../components/LoginForm';
import { loginForm } from '../services/actions';

const submitLoginForm = submitForm(config.forms.login, loginForm);

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            onSubmit: submitLoginForm,
        },
        dispatch,
    );

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
    form: config.forms.login,
    validate,
};

export default compose(
    injectIntl,
    connect(
        null,
        mapDispatchToProps,
    ),
    reduxForm(formCofig),
)(LoginForm);
