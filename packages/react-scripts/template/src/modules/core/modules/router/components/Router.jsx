import { React, PropTypes, ConnectedRouter } from '../dependencies';
import { history } from '../config';

function Router({ children }) {
    return <ConnectedRouter history={history}>{children}</ConnectedRouter>;
}

Router.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Router;
