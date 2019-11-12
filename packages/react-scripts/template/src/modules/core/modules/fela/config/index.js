import { Consts, resets, vendors, theme } from '../dependencies';

import plugins from './plugins';
import enhancers from './enhancers';

export const rendererConfig = {
    devMode: Consts.isEnvDevelopment,
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
