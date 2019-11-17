# Migration guide `0.x` -> `1.x`

> **No need anymore to set `NODE_ENV` variable before opening CRA project in vscode.**

Install the latest version:

```sh
yarn add @ackee/react-scripts@1.0.0 -D

# For beta testers:
yarn add @ackee/react-scripts@1.0.0-beta.0 -D
```

There're only a few breaking changes you have to resolve, continue to [Must update](#must-update) section.

## Overview

- [Must update](#must-update)
- [Recommended to update](#recommended-to-update)
- [Optional to update](#optional-update)

---

## Must update (breaking changes)

1. #### Removed support for `export * as` syntax

   This experimential syntax **still** isn't handled by vscode, so for example "click to definition" won't work and weird ts lint error is display at each such line. Therefore, it's been removed:

   ```diff
   - export * as Foo from './bar';
   ```

   ```diff
   + import * as Foo from './bar';
   +
   + export { Foo };
   ```

2. #### Removed default support for yaml files

   Since localizations are generated automatically from a Google Sheet to a JSON files there's no need to preserve `yaml-loader`.

   Thus, either **follow the [Setup speadsheet translations](https://frontend-cookbook.ack.ee/pages/project/SpreadsheetTranslations.html) guide**. If you insist on preserving current setup, add manually `yaml-loader`:

   ```sh
   yarn add yaml-loader json-loader -D
   ```

   Create `/config/transformWebpackConfig.js` file at project root with following content:

   ```diff
   + 'use strict';
   +
   + function insertYamlLoader(rules = []) {
   +     const resultLoader = rules.find(rule => Array.isArray(rule.oneOf));
   +
   +     if (!resultLoader) {
   +         throw new Error(`No loader with following condition found: 'Array.isArray(loader.oneOf)'`);
   +     }
   +
   +     // `yml-loader` must be prepend before `file-loader`
   +     resultLoader.oneOf.unshift({
   +         test: /\.yml$/,
   +         loader: 'json-loader!yaml-loader',
   +     });
   + }
   +
   + module.exports = webpackConfig => {
   +     insertYamlLoader(webpackConfig.module.rules);
   +
   +     return webpackConfig;
   +};
   ```

3. #### react-hot-loader

   Remove `hot` HOC from `src/modules/application` module.

4. #### Updated `analyze-dependencies` script in `package.json`

   ```diff
   {
   -    "analyze-dependencies": "react-scripts analyze-dependencies --circular",
   +    "analyze-dependencies": "ackee-react-scripts check-circular-modules",
   }
   ```

5. #### No more custom aliases, only absolute imports

   The overhead for custom aliases was unnecessary, since it can be done only with [`jsconfig.json` (or `tsconfig.json`) file](https://create-react-app.dev/docs/importing-a-component#absolute-imports):

   ```diff
    {
        "compilerOptions": {
            // ...
   +        "baseUrl": "src",
   -         "paths": {
   -             "Src/*": ["*"],
   -             "Components/*": ["components/*"],
   -             "Config/*": ["config/*"],
   -             "Containers/*": ["containers/*"],
   -             "Consts/*": ["constants/*"],
   -             "Constants/*": ["constants/*"],
   -             "HOC/*": ["HOC/*"],
   -             "Localization/*": ["localization/*"],
   -             "Modules/*": ["modules/*"],
   -             "Services/*": ["services/*"],
   -             "Actions/*": ["services/actions/*"],
   -             "ActionTypes/*": ["services/actionTypes/*"],
   -             "Reducers/*": ["services/reducers/*"],
   -             "Sagas/*": ["services/sagas/*"],
   -             "Selectors/*": ["services/selectors/*"],
   -             "Utils/*": ["services/utilities/*"],
   -             "Utilities/*": ["services/utilities/*"],
   -             "Styles/*": ["styles/*"]
   -         }
        },
   +    "include": ["src"]
    }
   ```

   Update eslint config in `package.json` as:

   ```diff
       "eslintConfig": {
       "extends": [
           "react-app",
   -        "ackee",
   +        "@ackee/eslint-config",
           "prettier"
       ],
       "rules": {
           "no-restricted-globals": "off"
       },
       "settings": {
           "import/resolver": {
   -             "webpack": {
   -                 "config": "./node_modules/@ackee/react-scripts/config/webpack.config.js"
   -             }
   +             "node": {
   +                 "paths": ["src"]
   +             }
           }
       },
   -     "env": {
   -         "browser": true,
   -         "jest": true,
   -         "cypress/globals": true
   -     },
       "plugins": [
           "cypress"
       ]
   },
   ```

   Now, by default, all directories in the `src` are accessible as:

   ```diff
   - import { Foo } from 'Modules/foo';
   + import { Foo } from 'modules/foo;
   ```

   > Issues with `constants` and `config` paths
   >
   > "Go to definition" feature won't work for some reason for `constants` and `config` paths. It might be kind of fixed as:
   >
   > ```diff
   > - import * as Consts from 'constants';
   > + import * as Consts from 'constants/index';
   >
   > - import Config as 'config';
   > + import Config as 'config/config';
   > ```

- ### Browsers list

  Default `browserslist` has been updated to:

  ```json
  "browserslist": {
    "production": [
        ">0.2%",
        "not dead",
        "not ie <= 11",
        "not op_mini all"
    ],
    "development": [
        "last 1 chrome version",
        "last 1 firefox version",
        "last 1 safari version"
    ]
  },
  ```

## Recommended to update

- ### CSS resets are generated based on current `browserslist`

  Find `resets.css` file and **replace all old content** with:

  ```diff
  + /*
  +     https://create-react-app.dev/docs/adding-css-reset#indexcss
  + */
  + @import-normalize;
  ```

- ### Custom Webpack config without eject

  1. Create `transformWebpackConfig` within `config` folder:

  ```diff
  + /config
  +     transformWebpackConfig.js
  ```

  2. Add `transformWebpackConfig.js` file content:

  ```diff
  + 'use strict';

  + module.exports = (webpackConfig, webpackEnv) => webpackConfig;
  ```

  That's it. Now you can edit whole webpack config object - add new loaders, plugins and so on.

  > From `webpack@5.0.0` it should be possible to use typescript in webpack config and therefore make the whopping `webpackConfig` more developer friendly.

## Low priority to update

- ### Remove `hygen` from skeleton
  A new command in [Ackee frontend](https://github.com/AckeeCZ/vscode-frontend) vscode plugin will supersede current, already obsolute, hygen template.
  ```diff
  - /_templates
  - /.hygen.js
  ```
  ```sh
  yarn remove hygen
  # or
  npm rm hygen
  ```
  Remove `create-module` script in `package.json`:
  ```diff
  "scripts": {
  -     "create-module": "hygen module new --name $1",
  }
  ```
