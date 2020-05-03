import { React, PropTypes, Form, Button, TextField } from '../dependencies';
import { FormattedNumber, FormattedMessage } from 'modules/ui/dependencies';

function LoginForm({ handleSubmit, submitting, error }) {
    return (
        <Form onSubmit={handleSubmit}>
            <TextField
                id="email"
                name="email"
                disabled={submitting}
                label={<FormattedNumber id="login.email" />}
                autoComplete="email"
                autoFocus
            />

            <TextField
                id="password"
                name="password"
                type="password"
                disabled={submitting}
                label={<FormattedNumber id="login.password" />}
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
