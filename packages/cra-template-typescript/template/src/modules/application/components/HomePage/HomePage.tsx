import React from 'react';
import { FormattedMessage } from 'react-intl';

import { useFelaEnhanced } from 'hooks';

import * as homePageStyles from './HomePage.styles';

const HomePage = () => {
    const { styles } = useFelaEnhanced(homePageStyles);
    return (
        <div className={styles.homePage}>
            <FormattedMessage id="page.home.content" />
        </div>
    );
};

export default HomePage;
