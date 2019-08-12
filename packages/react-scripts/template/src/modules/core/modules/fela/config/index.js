import { consts, resets, vendors, theme } from '../dependencies';

import plugins from './plugins';
import enhancers from './enhancers';

export const rendererConfig = {
    devMode: consts.isEnvDevelopment,
    enhancers,
    plugins,
    theme,
};

export const staticCSS = [resets, vendors];

export const fonts = [
    // {
    //     name: '',
    //     files: [],
    //     options: {}
    // }
];
