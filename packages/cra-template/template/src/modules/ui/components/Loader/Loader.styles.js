export const loader = ({ inline }) => {
    const style = {
        background: 'white',
        height: '100%',
        width: '100%',
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minWidth: '5rem',
        minHeight: '5rem',
    };

    if (!inline) {
        Object.assign(style, {
            position: 'absolute',
            top: 0,
            left: 0,
        });
    }

    return style;
};

export const text = () => ({
    marginTop: '0.5rem',
});
