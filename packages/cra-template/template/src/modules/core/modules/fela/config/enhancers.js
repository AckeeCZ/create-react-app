import { felaMonolithic } from '../dependencies';

const enhancers = [
    process.env.NODE_ENV === 'development' &&
        felaMonolithic({
            prettySelectors: true,
        }),
].filter(Boolean);

export default enhancers;
