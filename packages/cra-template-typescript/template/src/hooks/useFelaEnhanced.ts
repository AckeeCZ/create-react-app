import React from 'react';
import { combineMultiRules } from 'fela-tools';
import { useFela } from 'react-fela';

// This solution is based on the implementation of [connect binding](https://github.com/robinweser/fela/blob/master/packages/fela-bindings/src/connectFactory.js) from fela
export default function useFelaEnhanced(rules, { extend, ...otherProps } = {}) {
    const { theme, renderer } = useFela();

    const allRules = [rules];

    if (extend) {
        allRules.push(extend);
    }

    const combinedRules = combineMultiRules(...allRules);

    const preparedRules = combinedRules(
        {
            ...otherProps,
            theme,
        },
        renderer,
    );

    const styles = Object.keys(preparedRules).reduce((styleMap, name) => {
        const preparedRule = preparedRules[name];

        styleMap[name] = renderer.renderRule(preparedRule, {
            ...otherProps,
            theme,
        });

        return styleMap;
    }, {});

    const boundRules = Object.keys(preparedRules).reduce((ruleMap, name) => {
        ruleMap[name] = props =>
            preparedRules[name](
                {
                    theme,
                    ...props,
                },
                renderer,
            );

        return ruleMap;
    }, {});

    const foo = React.useMemo(
        () => ({
            styles,
            rules: boundRules,
            theme,
        }),
        [styles, theme, boundRules],
    );
    return foo;
}
