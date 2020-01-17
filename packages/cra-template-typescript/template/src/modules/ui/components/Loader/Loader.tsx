import { React, PropTypes, connectFela, childrenPropType, FormattedMessage, AntdSpin } from '../../dependencies';

import * as Styles from './Loader.styles';

const Loader = ({ children, show, styles }) => {
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
    styles: PropTypes.shape().isRequired,
};

Loader.defaultProps = {
    children: null,
};

export default connectFela(Styles)(Loader);
