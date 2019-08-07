import { React, FelaComponent, FormattedMessage } from '../dependencies';

import * as styles from './ErrorMessage.styles';

const ErrorMessage = () => (
    <FelaComponent style={styles.message}>
        <FormattedMessage id="error.general" />
    </FelaComponent>
);

export default ErrorMessage;
