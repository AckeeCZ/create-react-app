import { React, PropTypes, Form, Button, TextField } from '../dependencies';

const LoginForm = ({ handleSubmit, intl, submitting, error }) => (
    <Form onSubmit={handleSubmit}>
        <TextField
            {...{
                id: 'email',
                name: 'email',
                disabled: submitting,
                label: intl.formatMessage({ id: 'login.email' }),
            }}
        />

        <TextField
            {...{
                id: 'password',
                name: 'password',
                type: 'password',
                disabled: submitting,
                label: intl.formatMessage({ id: 'login.password' }),
            }}
        />

        <Button
            {...{
                id: 'submitButton',
                htmlType: 'submit',
                disabled: submitting,
            }}
        >
            {intl.formatMessage({ id: 'login.submit' })}
        </Button>

        {error && <p>{error}</p>}
    </Form>
);

LoginForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    intl: PropTypes.shape({
        formatMessage: PropTypes.func.isRequired,
    }).isRequired,
    submitting: PropTypes.bool.isRequired,
    error: PropTypes.string,
};

LoginForm.defaultProps = {
    error: '',
};

export default LoginForm;
