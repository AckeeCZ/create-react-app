import { React, FormattedMessage, FelaComponent } from '../../dependencies';

import * as styles from './HomePage.styles';

const HomePage = () => (
    <FelaComponent style={styles.homePage}>
        <FormattedMessage id="page.home.content" />
    </FelaComponent>
);

export default HomePage;
