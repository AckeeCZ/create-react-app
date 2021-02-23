import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import * as PropTypes from 'prop-types';

import { useFelaEnhanced } from 'hooks';

import * as itemStyles from './NavItem.styles';

const NavItem = ({ to, messageId }) => {
    const { styles } = useFelaEnhanced(itemStyles);

    return (
        <Link to={to} className={styles.navItem}>
            <FormattedMessage id={messageId} />
        </Link>
    );
};

NavItem.propTypes = {
    to: PropTypes.string.isRequired,
    messageId: PropTypes.string.isRequired,
};

export default NavItem;
