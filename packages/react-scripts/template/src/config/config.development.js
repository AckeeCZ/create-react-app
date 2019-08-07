const appName = process.env.REACT_APP_NAME;

const config = {
    api: {
        base: `https://api-${appName}-development.ack.ee/api`,
    },
    devTools: true,
};

export default config;
