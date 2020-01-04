const applyFonts = (renderer, fonts = []) => {
    for (const { name, files, options } of fonts) {
        renderer.renderFont(name, files, options);
    }
};

export default applyFonts;
