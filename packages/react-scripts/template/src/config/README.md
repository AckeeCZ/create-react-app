# Global config

## Libraries and packages global configuration

As you can see, the `@ackee/antonio` has its configuration placed right here and exports configured object references, that are then used all over the application. Such an approach is very much recommended.

Many libraries (firebase, imgix, cloudinary) need to be somewhere initialized, here's the right place to do it.

## `BUILD_ENV` specific configuration

Based on the `BUILD_ENV` variable is chosen `config.development.js`, `config.production.js` or `config.stage.js`, which is (deeply) merge with the main confgiration - `config.js`.

## Module level config

Don't add new global config, if it will be used only on a module level, define it inside that module.

Read more about [Modules](../modules/README.md#config).
