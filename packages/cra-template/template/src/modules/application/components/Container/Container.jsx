import { React, childrenPropType, FelaComponent } from '../../dependencies';

import * as styles from './Container.styles';

const Container = ({ children }) => {
    return <FelaComponent style={styles.container}>{children}</FelaComponent>;
};

Container.propTypes = {
    children: childrenPropType.isRequired,
};

export default Container;
