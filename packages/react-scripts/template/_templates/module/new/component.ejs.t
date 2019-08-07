---
to: src/modules/<%= name %>/components/<%= h.componentName(name) %>.jsx
---
import {
    React,
    PropTypes,
} from '../dependencies';

const <%= h.componentName(name) %> = () => (
    <div>
        Content
    </div>
);

<%= h.componentName(name) %>.propTypes = {

};

<%= h.componentName(name) %>.defaultProps = {

};

export default <%= h.componentName(name) %>;
