import { React, PropTypes, childrenPropType } from '../../dependencies';

const Container = ({ styles, children }) => <div className={styles.container}>{children}</div>;

Container.propTypes = {
    styles: PropTypes.shape({
        container: PropTypes.string.isRequired,
    }).isRequired,
    children: childrenPropType.isRequired,
};

export default Container;
