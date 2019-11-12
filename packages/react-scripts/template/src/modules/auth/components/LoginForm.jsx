import { React, PropTypes, Form, Button, TextField, useIntl } from '../dependencies';

const LoginForm = ({ handleSubmit, submitting, error }) => {
    const { formatMessage } = useIntl();

    return (
        <Form onSubmit={handleSubmit}>
            <TextField
                {...{
                    id: 'email',
                    name: 'email',
                    disabled: submitting,
                    label: formatMessage({ id: 'login.email' }),
                }}
            />

            <TextField
                {...{
                    id: 'password',
                    name: 'password',
                    type: 'password',
                    disabled: submitting,
                    label: formatMessage({ id: 'login.password' }),
                }}
            />

            <Button
                {...{
                    id: 'submitButton',
                    htmlType: 'submit',
                    disabled: submitting,
                }}
            >
                {formatMessage({ id: 'login.submit' })}
            </Button>

            {error && <p>{error}</p>}
        </Form>
    );
};

LoginForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
    error: PropTypes.string,
};

LoginForm.defaultProps = {
    error: '',
};

export default LoginForm;
