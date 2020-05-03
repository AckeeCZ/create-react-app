import { React, PropTypes } from '../../dependencies';

import NavItem, { NavItemPropType } from './NavItem';

const Navbar = ({ styles, navItems }) => (
    <nav className={styles.navbar}>
        {navItems.map((navItem, index) => (
            // NOTE: It's ok to use index as key for static arrays.
            <NavItem key={index} {...navItem} />
        ))}
    </nav>
);

Navbar.propTypes = {
    styles: PropTypes.shape().isRequired,
    navItems: PropTypes.arrayOf(PropTypes.shape(NavItemPropType).isRequired).isRequired,
};

export default Navbar;
