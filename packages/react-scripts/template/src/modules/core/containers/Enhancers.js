import { compose } from '../dependencies';

import { withErrorBoundary } from '../modules/error-boundary';
import { withTranslatable } from '../modules/localization';

const Children = ({ children }) => children;

export default compose(
    withTranslatable,
    withErrorBoundary,
)(Children);
