import { React, PureComponent, PropTypes, Provider } from '../dependencies';

import { configureStore } from '../config';

class Redux extends PureComponent {
    static propTypes = {
        children: PropTypes.node.isRequired,
    };

    constructor(props) {
        super(props);

        this.store = configureStore();
    }

    render() {
        return <Provider store={this.store}>{this.props.children}</Provider>;
    }
}

export default Redux;
