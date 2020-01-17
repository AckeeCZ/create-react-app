# `modules/core`

`core` module encapsulates:

-   configurations for `fela`, `redux`, `react-router` and `sentry`
-   initialization of `errorBoundary` HOC from `@ackee/lucas` and localization module from `@ackee/jerome`

Each of these configurations or initializations has its own sub-module placed at `modules` directory.

All HOCs from those sub-modules, `withErrorBoundary`, `withTranslatable`, are combined into a container called `Enhancers` (`containers/Enhancers.js`).

The main part of the `components/Core.jsx` component looks like this:

```js
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
```

All those extensions are then nicely placed as React components in well-arranged and maintainable structure.
The core component also initializes Sentry and registers (unregisters) a service worker.

## `modules/`

### `error-boundary`

Intialize `errorBoundary` HOC from the `@ackee/lucas` with custom error message component - `components/ErrorMessage.jsx`. The component is then rendered if any error occurs under the HOC scope.

### [`fela`](http://fela.js.org/)

In the `components/Fela.jsx` a Fela renderer is created,
which receives fonts and static CSS files with CSS reset (optional). Then the renderer is passed to `FelaProvider` component.

Note that Fela theme is placed in global styles (`src/styles/theme`) and only imported here as another dependency.

> You can add a Fela plugin or enhancer in `config/index.js` file.

### [`localization`](https://github.com/AckeeCZ/Foolkit/tree/master/src/modules/localization)

Initialize `translatable` HOC and `localizationReducerFactory` reducer from the `localization` module placed at `@ackee/jerome`

### `redux`

Middlewares are initialized in `./config/enhancer.js`.

The `config/store.js` returns a new Redux store that is pass to the Redux provider in `components/Redux.jsx` component.

The root reducer and root saga are placed at `services` folder. Reducers and sagas from other core sub-modules are connected here. Also, reducers from global services (`services/reducers/index.js`) and global saga (`services/sagas/inedx.js`) are connected here likewise.

### `router`

In the `components/Router.jsx` is rendered `ConnectedRouter` component from the `connected-react-router` with a `history` object created at `config/index.js`. The config file also contains initialized `routerMiddleware` middleware and `connectRouter` reducer (with the same `history` object).

### `sentry`

Only **required configuration of Sentry is to provide `dsn` of your project** that has been created at sentry's website.

By default Sentry logs all uncaught errors from redux sagas, any error catched with the `errorBoundary` HOC.

At this moment, Sentry doesn't capture current redux state when an exception is reported. Sentry has been recently upgraded and I couldn't find any working Redux middleware to be able to do it (5.12. 2018).
