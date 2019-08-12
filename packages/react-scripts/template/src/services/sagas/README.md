# sagas

Please respect rules below when you are connecting / adding a new saga.

---

## `modules/`

The modules folder contains sagas from... well, modules, which are imported as follow:

```js
import { saga as moduleName } from 'modules/moduleName';
```

## `authSaga.js`

Here, you can hook up all sagas that need to run only if a user is authorized (i.e. they can access authorized API endpoints).
