import React from 'react';
import ReactDOM from 'react-dom';

import Core from 'Modules/core';
import Application from 'Modules/application';

ReactDOM.render(
    <Core>
        <Application />
    </Core>,
    document.getElementById('root'),
);
