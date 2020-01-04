import { connect, Petrus } from '../dependencies';

import { userEmailSelector } from '../services/selectors';

import AuthContent from '../components/AuthContent';

const mapStateToProps = state => ({
    userEmail: userEmailSelector(state),
});

const mapDispatchToProps = {
    logout: Petrus.logoutRequest,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AuthContent);
