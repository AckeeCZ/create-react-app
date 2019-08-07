import { React, FelaComponent, PropTypes } from '../../dependencies';

import NavItem from './NavItem';

import * as styles from './Navbar.styles';

const Navbar = ({ navItems }) => {
    return (
        <FelaComponent style={styles.navbar}>
            {navItems.map(navItem => (
                <NavItem key={navItem.to} {...navItem} />
            ))}
        </FelaComponent>
    );
};

Navbar.propTypes = {
    navItems: PropTypes.arrayOf(PropTypes.shape(NavItem.propTypes).isRequired).isRequired,
};

export default Navbar;
