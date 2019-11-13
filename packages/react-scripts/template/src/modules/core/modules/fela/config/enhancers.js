import { felaMonolithic, Consts } from '../dependencies';

const enhancers = [
    /**
     * @SSR
     * Pretty selectors give a slightly different result when rendered on server side and then on
     * client side, which breaks a design, that's why we need to disable them when app is server rendered
     * and allow them for development with webpack dev server
     */
    process.env.NODE_ENV === 'development' &&
        felaMonolithic({
            prettySelectors: Consts.isDevServerEnv,
        }),
].filter(Boolean);

export default enhancers;
