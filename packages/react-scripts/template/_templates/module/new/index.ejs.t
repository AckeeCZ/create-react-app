---
to: src/modules/<%= name %>/index.js
---
export { default as <%= h.componentName(name) %> } from './containers/<%= h.componentName(name) %>';

export * as actions from './services/actions';
export { default as actionTypes } from './services/actionTypes';
export { default as saga } from './services/saga';
export { default as reducer } from './services/reducer';
