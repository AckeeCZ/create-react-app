# Global components

The `components` directory includes only presentational components.

## Table of Contents

-   [Presentational component definition](#component-definition)
-   [Single Component structure](#single-component-structure)
-   [Group of components structure](#group-of-components-structure)

---

## <a name="component-definition"></a>Presentational component definition

-   A component must be **pure function that accepts "props" and returns a React element**, without any side effects (e.g. API calls).
-   Component can be defined with a function or with a ES6 class.

### Characteristics of a presentational component

-   Are concerned with how things look.
-   May contain only other presentational components
-   Often allow containment via _this.props.children_.
-   Have no dependencies on the rest of the app, such as Redux actions or selectors.
-   Don’t specify how the data is loaded or mutated.
-   Receive data and callbacks exclusively via props.
-   Rarely have their own state (when they do, it’s UI state rather than data).
-   Are written as functional components unless they need state, lifecycle hooks, or performance optimizations.
-   Examples: _Page, Sidebar, Story, UserInfo, List_.

Source - ["Presentational and Container Components" by Dan Abramov](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)

---

## Single Component structure

A global component should be placed in its own folder.

Required files:

-   `index.js` - includes default component export (`export { default } from './ComponentName'`)
-   `ComponentName.jsx`

Optional files:

-   `ComponentName.scss` - SASS styles
-   `ComponentName.styles.js` - CSS modules, Fela (rules, styles objects)
-   `ComponentName.test.js` - tests
-   `ComponentName.md` - documentation
-   etc.

```text
    components/
        Foo/
            index.js
            Foo.jsx
```

### <a name="single-component-structure"></a>Sub-components

A component can have its own sub-components. There are two ways you can write them:

-   If a sub component has its own styles, tests, etc., then it must have its own directory and obeys the same rules as mentioned above:

```text
    components/
        Foo/
            index.js
            Foo.jsx
            Bar/
                index.js
                Bar.jsx
                Bar.test.js
```

-   Sub component that doesn't need any other files (styles, tests, etc.) can be placed within the same folder:

```text
    components/
        Foo/
            index.js
            Foo.jsx
            Bar.jsx
```

---

## <a name="group-of-components-structure"></a>Group of components structure

There are cases when you need wrap components into a group of components (e.g. icons, form fields).

Required structure

-   `index.js` - contains named exports of each component
-   each component inside follow the same rules as [Single Component structure](#single-component-structure)

```text
    components/
        Icons/
            ArrowLeft.jsx
            Hamburger/
                index.js
                Hamburger.jsx
                Hamburger.test.js
```

---

## Best practices

-   **PropTypes** - Each property should have defined its type (always use `.isRequired` suffix when you can - It's better to know, that some data are invalid, than make a it somehow work, and then find out a weird component behavior during testing phase without any clue why).

-   **ESLint** - Quick check for ESLint errors and warnings before leaving and fix them right away.

---

## Common mistakes

-   ...
