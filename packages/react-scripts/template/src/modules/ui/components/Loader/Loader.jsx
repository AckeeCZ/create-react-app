import { React, PropTypes, connectFela, childrenPropType, FormattedMessage, AntdSpin } from '../../dependencies';

import * as Styles from './Loader.styles';

const Loader = ({ children, showLoader, styles }) => {
    return showLoader ? (
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
    showLoader: PropTypes.bool,
    styles: PropTypes.shape().isRequired,
};

Loader.defaultProps = {
    showLoader: true,
    children: null,
};

export default connectFela(Styles)(Loader);
