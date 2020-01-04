import { React, PropTypes, Provider } from '../dependencies';

import { configureStore } from '../config';

function Redux({ children }) {
    const store = configureStore();

    return <Provider store={store}>{children}</Provider>;
}

Redux.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Redux;
