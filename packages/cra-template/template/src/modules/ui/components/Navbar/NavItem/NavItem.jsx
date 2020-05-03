import { React, PropTypes, Link, FormattedMessage } from '../../../dependencies';

const NavItem = ({ styles, to, messageId }) => (
    <Link to={to} className={styles.navItem}>
        <FormattedMessage id={messageId} />
    </Link>
);

export const NavItemPropType = {
    to: PropTypes.string.isRequired,
    messageId: PropTypes.string.isRequired,
};

NavItem.propTypes = {
    styles: PropTypes.shape().isRequired,
    ...NavItemPropType,
};

export default NavItem;
