import { React, FelaComponent, Link, FormattedMessage, PropTypes } from '../../../dependencies';

import * as styles from './NavItem.styles';

const NavItem = ({ to, messageId }) => {
    return (
        <FelaComponent style={styles.navItem}>
            {({ className }) => (
                <Link
                    {...{
                        to,
                        className,
                    }}
                >
                    <FormattedMessage id={messageId} />
                </Link>
            )}
        </FelaComponent>
    );
};

NavItem.propTypes = {
    to: PropTypes.string.isRequired,
    messageId: PropTypes.string.isRequired,
};

export default NavItem;
