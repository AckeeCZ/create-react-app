# `auth`

The `auth` module handles all logic related to app authentication.

The main auth logic is outsourced to the [`@ackee/petrus` package](https://github.com/AckeeCZ/petrus). You just need to pass to its configure method following functions: `authenticate`, `refreshTokens` and `getAuthUser`. These functions already exist in `./services/sagas` directory with the configuration in `./services/sagas/index.js`.

> Check you have configured correct API base URL in `config/config.development.js`.
