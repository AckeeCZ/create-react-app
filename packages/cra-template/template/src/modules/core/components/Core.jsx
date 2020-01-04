import { React, PropTypes, serviceWorker } from '../dependencies';

import * as Config from '../config';

import { Fela } from '../modules/fela';
import { Redux } from '../modules/redux';
import { Router } from '../modules/router';
import { initializeSentry } from '../modules/sentry';

import Enhancers from '../containers/Enhancers';

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
Config.plugins.serviceWorker ? serviceWorker.register() : serviceWorker.unregister();

if (Config.plugins.sentry) {
    initializeSentry();
}

function Core({ children }) {
    return (
        <Redux>
            <Fela>
                <Router>
                    <Enhancers>{children}</Enhancers>
                </Router>
            </Fela>
        </Redux>
    );
}

Core.propTypes = {
    children: PropTypes.element.isRequired,
};

export default Core;
