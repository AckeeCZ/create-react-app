import { React, PropTypes, FormattedMessage } from '../../dependencies';

const HomePage = ({ styles }) => (
    <div className={styles.homePage}>
        <FormattedMessage id="page.home.content" />
    </div>
);

HomePage.propTypes = {
    styles: PropTypes.shape({
        homePage: PropTypes.string.isRequired,
    }).isRequired,
};

export default HomePage;
