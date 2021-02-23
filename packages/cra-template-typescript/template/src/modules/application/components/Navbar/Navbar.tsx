import React from 'react';
import * as PropTypes from 'prop-types';

import { useFelaEnhanced } from 'hooks';

import NavItem from './NavItem';

import * as navbarStyles from './Navbar.styles';

const Navbar = ({ navItems }) => {
    const { styles } = useFelaEnhanced(navbarStyles);

    return (
        <div className={styles.navbar}>
            {navItems.map(navItem => (
                <NavItem key={navItem.to} {...navItem} />
            ))}
        </div>
    );
};

Navbar.propTypes = {
    navItems: PropTypes.arrayOf(PropTypes.shape(NavItem.propTypes).isRequired).isRequired,
};

export default Navbar;
