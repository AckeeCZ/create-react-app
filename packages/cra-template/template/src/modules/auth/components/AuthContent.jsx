import { React, FormattedMessage, PropTypes } from '../dependencies';

const texts = {
    logout: <FormattedMessage id="logout" />,
};

function AuthContent({ logout, userEmail }) {
    return (
        <>
            <div>Signed in user: {userEmail}</div>
            <button type="button" onClick={logout}>
                {texts.logout}
            </button>
        </>
    );
}

AuthContent.propTypes = {
    logout: PropTypes.func.isRequired,
    userEmail: PropTypes.string.isRequired,
};

export default AuthContent;
