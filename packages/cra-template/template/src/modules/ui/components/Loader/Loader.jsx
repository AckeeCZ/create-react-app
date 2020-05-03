import { React, PropTypes, childrenPropType, AntdSpin, FormattedMessage } from '../../dependencies';

function Loader({ styles, show, children }) {
    if (!show) {
        return <>{children}</>;
    }

    return (
        <div className={styles.loader}>
            <AntdSpin size="large" />
            <div className={styles.text}>
                <FormattedMessage id="loader.title" />
            </div>
        </div>
    );
}

Loader.propTypes = {
    children: childrenPropType,
    show: PropTypes.bool,
    styles: PropTypes.shape().isRequired,
    inline: PropTypes.bool,
};

Loader.defaultProps = {
    show: true,
    children: null,
    inline: false,
};

export default Loader;
