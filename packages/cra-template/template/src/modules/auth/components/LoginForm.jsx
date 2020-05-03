import { React, PropTypes, Form, Button, TextField, FormattedMessage } from '../dependencies';

function LoginForm({ handleSubmit, submitting, error }) {
    return (
        <Form onSubmit={handleSubmit}>
            <TextField
                id="email"
                name="email"
                disabled={submitting}
                label={<FormattedMessage id="login.email" />}
                autoComplete="email"
                autoFocus
            />

            <TextField
                id="password"
                name="password"
                type="password"
                disabled={submitting}
                label={<FormattedMessage id="login.password" />}
                autoComplete="current-password"
            />

            <Button id="submitButton" htmlType="submit" disabled={submitting}>
                <FormattedMessage id="login.submit" />
            </Button>

            {error && <p>{error}</p>}
        </Form>
    );
}

LoginForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
    error: PropTypes.string,
};

LoginForm.defaultProps = {
    error: '',
};

export default LoginForm;
