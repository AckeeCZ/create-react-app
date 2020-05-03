import { React, FormattedMessage, useDispatch, useSelector, Petrus } from '../dependencies';

import { userEmailSelector } from '../services/selectors';

function AuthContent() {
    const dispatch = useDispatch();
    const userEmail = useSelector(userEmailSelector);

    return (
        <>
            <div>Signed in user: {userEmail}</div>
            <button type="button" onClick={() => dispatch(Petrus.logoutRequest())}>
                <FormattedMessage id="logout" />
            </button>
        </>
    );
}

export default AuthContent;
