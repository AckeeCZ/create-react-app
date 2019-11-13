import React from 'react';
import ReactDOM from 'react-dom';

import { isDevServerEnv } from 'constants/index';
import Core from 'modules/core';
import Application from 'modules/application';

const render = isDevServerEnv ? ReactDOM.render : ReactDOM.hydrate;

render(
    <Core>
        <Application />
    </Core>,
    document.getElementById('root'),
);
