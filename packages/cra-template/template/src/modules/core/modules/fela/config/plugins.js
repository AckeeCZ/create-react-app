import {
    felaPluginValidator,
    felaPluginUnit,
    felaPluginNamedKeys,
    felaPluginFriendlyPseudoClass,
    // felaPluginPrefixer,
} from '../dependencies';

import namedKeys from './namedKeys';

const defaultUnit = 'px';

const plugins = [
    // docs: https://github.com/rofrischmann/fela/tree/master/packages/fela-plugin-unit
    felaPluginUnit(defaultUnit),

    // docs: https://github.com/rofrischmann/fela/tree/master/packages/fela-plugin-friendly-pseudo-class
    felaPluginFriendlyPseudoClass(),

    // docs: https://github.com/rofrischmann/fela/tree/master/packages/fela-plugin-friendly-pseudo-class
    felaPluginNamedKeys(namedKeys),

    // felaPluginValidator should be the last plugin
    process.env.NODE_ENV === 'development' &&
        felaPluginValidator({
            logInvalid: true,
            deleteInvalid: false,
            useCSSLint: false,
        }),

    // NOTE: It's disabled because it deletes rules that are valid, such a 'display: grid'
    // felaPluginPrefixer(),
].filter(Boolean);

export default plugins;
