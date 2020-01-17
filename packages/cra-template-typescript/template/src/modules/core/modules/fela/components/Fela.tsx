import { React, PropTypes, RendererProvider, ThemeProvider, createRenderer, theme } from '../dependencies';

import { applyStaticCSS, applyFonts } from '../utilities';
import * as Config from '../config';

function Fela({ children }) {
    const renderer = createRenderer(Config.rendererConfig);

    React.useEffect(() => {
        applyStaticCSS(renderer, Config.staticCSS);
        applyFonts(renderer, Config.fonts);

        return () => {
            renderer.clear();
        };
    }, [renderer]);

    return (
        <RendererProvider renderer={renderer}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </RendererProvider>
    );
}

Fela.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Fela;
