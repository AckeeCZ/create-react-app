import React from 'react';
import * as PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { childrenPropType } from '@ackee/lucas';
import { Spin as AntdSpin } from 'antd';

import { useFelaEnhanced } from 'hooks';

import * as loaderStyles from './Loader.styles';

const Loader = ({ children, show }) => {
    const { styles } = useFelaEnhanced(loaderStyles);

    return show ? (
        <div className={styles.loader}>
            <AntdSpin />
            <div className={styles.text}>
                <FormattedMessage id="loader.title" />
            </div>
        </div>
    ) : (
        <>{children}</>
    );
};

Loader.propTypes = {
    children: childrenPropType,
    show: PropTypes.bool.isRequired,
};

Loader.defaultProps = {
    children: null,
};

export default Loader;
