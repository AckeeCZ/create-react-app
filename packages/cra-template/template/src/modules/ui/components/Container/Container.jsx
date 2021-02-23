import React from 'react';
import { childrenPropType } from '@ackee/lucas';

import { useFelaEnhanced } from 'hooks';

import * as containerStyles from './Container.styles';

const Container = ({ children }) => {
    const { styles } = useFelaEnhanced(containerStyles);

    return <div className={styles.container}>{children}</div>;
};

Container.propTypes = {
    children: childrenPropType.isRequired,
};

export default Container;
