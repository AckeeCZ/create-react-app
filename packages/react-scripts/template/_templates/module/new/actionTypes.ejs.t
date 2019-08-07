---
to: src/modules/<%= name %>/services/actionTypes.js
---
import { asyncType, strictObjectAccess } from '../dependencies';

export default strictObjectAccess({
    ...asyncType({
        typePrefix: 'FETCH_DATA_'
    }),
});
