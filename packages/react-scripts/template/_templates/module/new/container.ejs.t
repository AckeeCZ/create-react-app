---
to: src/modules/<%= name %>/containers/<%= h.componentName(name) %>.js
---
import {
    connect,
    bindActionCreators,
} from '../dependencies';

import <%= h.componentName(name) %> from '../components/<%= h.componentName(name) %>';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(<%= h.componentName(name) %>);
