# Global constants

**Please use always constants, you will prevent awful bugs and save yourself a lot of time**.

`index.js` includes named exports of all constants inside the `constants` directory.

There are no strict rules how to write them. Just make sure the key of a constant is written in uppercase:

```js
export const env = {
    PRODUCTION: 'production',
    DEVELOPMENT: 'development',
};
```

And don't forget to export them from the `index.js` file.

```js
// env.js
export const nodeEnv = {
    PRODUCTION: 'production',
};
export const buildEnv = {
    STAGE: 'state'
};

// index.js
export * from from './env';
```

or

```js
// env.js
export default {
    PRODUCTION: 'production',
};

// index.js
export { default as env } from './env';
```

---

# Module level constants

Don't defined constants globally, if they will be used only on a module level, define them inside that module.

Read more about [Modules](../modules/README.md#constants).
