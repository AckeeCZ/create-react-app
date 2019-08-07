import {
    React,
    PureComponent,
    PropTypes,
    RendererProvider,
    ThemeProvider,
    createRenderer,
    theme,
} from '../dependencies';

import { applyStaticCSS, applyFonts } from '../utilities';
import * as Config from '../config';

class Fela extends PureComponent {
    static propTypes = {
        children: PropTypes.node.isRequired,
    };

    constructor(props) {
        super(props);

        this.renderer = createRenderer(Config.rendererConfig);
    }

    componentDidMount() {
        applyStaticCSS(this.renderer, Config.staticCSS);
        applyFonts(this.renderer, Config.fonts);
    }

    comopnentWillUnmount() {
        this.renderer.clear();
    }

    render() {
        const { children } = this.props;

        return (
            <RendererProvider renderer={this.renderer}>
                <ThemeProvider theme={theme}>{children}</ThemeProvider>
            </RendererProvider>
        );
    }
}

export default Fela;
