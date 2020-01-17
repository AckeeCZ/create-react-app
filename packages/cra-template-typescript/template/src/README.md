# Development tips & recommendations

## Table of contents

-   [A local storage](#local-storage)
-   [The skeleton modules and code-splitting](#code-splitting)
-   [Static media imports](#media-imports)
-   [Circular & orphan dependencies](#circular-dependencies)

---

## <a name="local-storage"></a> A local storage

### Why not to use the local storage

-   ["Please Stop Using Local Storage"](https://www.rdegges.com/2018/please-stop-using-local-storage/)

### Use localForage instead with IndexedDB

localForage is a fast and simple storage library for JavaScript. localForage` improves the offline experience of your web app by using asynchronous storage (IndexedDB or WebSQL) with a simple, localStorage-like API.

---

## <a name="code-splitting"></a> Note to the skeleton modules and code-splitting

Let's suppose you know what code-splitting is and how it works. If it's not the case, please read the official [React - code-splitting ](https://reactjs.org/docs/code-splitting.html) docs first.

### Default and named export syntax with dynamic import

`React.lazy(...)` expects its 1st argument, when resolved, to return a module with default export. A content of the default export is then rendered as a React component.

**With default export syntax**

```js
const Application = React.lazy(() => import('modules/application'));
```

But what about when we want to use named export syntax? Sure, it's possible, but the solution doesn't look so nice and it adds unnecessary complexity to our code. So don't use it, if possible.

**With named export syntax**

```js
const Application = React.lazy(() =>
    import('modules/application').then(module => ({
        // Named export must be converted to default export.
        default: module.App,
    }))
);
```

> **The recommended solution**
>
> A (skeleton) module should export its main React component with the default export syntax.

---

## <a name="media-imports"></a> Static media imports

If you have an media server available (such a Imgix or Cloudinary), upload your static media to that server. Generate a URLs / IDs and use those in a project. Why?

-   final bundle size will be smaller
-   big files won't be stored on GitLab or GitHub
-   media will be delivered optimized

---

## <a name="circular-dependencies"></a> Circular & orphan dependencies

Circular dependencies occurs when module A imports module B and module B imports A module. Solution is easy, create 3rd file where the common code for modules A and B will be placed.
In larger code base, you will see the circular dependency through many many files and so detecting it manually would be pretty hard. Fortunately, we can run `npm run analyze-dependencies` script, this will check whole `src/` directory for any possible circular dependency and also for any orphan dependency.

**Orphan dependencies** - list of all modules that no one is depending on.

The `@ackee/react-scripts/scripts/analyze-dependencies.js` script built on [Madge API](https://www.npmjs.com/package/madge).

Available parameters:

-   `--circular` - Print out circular dependencies.
-   `--orphans` - Print out orphan dependencies.
-   `--silent` - Omit any output.

> If any circular dependency is found, exit code is going to be `1` and `0` otherwise. This is useful for example for `pre-push` hook, where we use the script as a test.
