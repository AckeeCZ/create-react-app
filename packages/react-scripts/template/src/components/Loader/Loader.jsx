import React from 'react';
import PropTypes from 'prop-types';
import { FelaComponent } from 'react-fela';
import { childrenPropType } from '@ackee/lucas';

import * as styles from './Loader.styles';

const SimpleLoader = ({ children, showLoader, text }) => (
    <div>
        {children}
        {showLoader && <FelaComponent style={styles.loader}>{text}</FelaComponent>}
    </div>
);

SimpleLoader.propTypes = {
    children: childrenPropType.isRequired,
    showLoader: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
};

export default SimpleLoader;
