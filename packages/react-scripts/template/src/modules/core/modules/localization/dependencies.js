import * as translations from 'translations';

export { translations };

export { translatableWithAntdFactory, reducer as localizationReducerFactory } from '@ackee/jerome';

export { addLocaleData } from 'react-intl';

// 3rd party locale data
export { default as csLocales } from 'react-intl/locale-data/cs';
export { default as csAntd } from 'antd/es/locale-provider/cs_CZ';
