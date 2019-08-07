const applyStaticCSS = (renderer, cssFiles = []) => {
    const cssString = cssFiles.reduce((acc, item) => acc + item.toString(), '');

    renderer.renderStatic(cssString);
};

export default applyStaticCSS;
