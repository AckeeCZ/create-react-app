import React from 'react';
import { FormattedMessage } from 'react-intl';

import { useFelaEnhanced } from 'hooks';

import * as errorMessageStyles from './ErrorMessage.styles';

const ErrorMessage = () => {
    const { styles } = useFelaEnhanced(errorMessageStyles);

    return (
        <div className={styles.message}>
            <FormattedMessage id="error.general" />
        </div>
    );
};

export default ErrorMessage;
