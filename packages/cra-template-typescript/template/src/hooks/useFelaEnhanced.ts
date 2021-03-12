import React from 'react';
import { combineMultiRules, TNormalizedMultiRule } from 'fela-tools';
import { TRule } from 'fela';
import { useFela, Rules as ReactFelaRules } from 'react-fela';

import { Theme } from 'styles';

declare module 'fela-tools' {
    function combineMultiRules<TRuleProps, Styles>(
        ...rules: Array<TMultiRule>
    ): TNormalizedMultiRule<TRuleProps, Styles>;
}

// This solution is based on the implementation of [connect binding](https://github.com/robinweser/fela/blob/master/packages/fela-bindings/src/connectFactory.js) from fela
export default function useFelaEnhanced<FelaRules, Props>(
    rules: ReactFelaRules<Props, FelaRules, Theme>,
    props: Props & { extend?: ReactFelaRules<Omit<Props, 'extend'>, FelaRules, Theme> } = {} as Props,
) {
    const { theme, renderer } = useFela<Theme>();

    const { extend, ...otherProps } = props;
    const allRules = [rules];

    if (extend) {
        allRules.push(extend);
    }

    type PropsWithoutExtend = Omit<Props, 'extend'>;
    type PropsWithTheme = PropsWithoutExtend & { theme: Theme };

    const combinedRules: TNormalizedMultiRule<PropsWithTheme, FelaRules> = combineMultiRules(...allRules);

    const preparedRules = combinedRules(
        {
            ...otherProps,
            theme,
        },
        renderer,
    );

    type RulesKey = keyof FelaRules;
    type Styles = { [key in RulesKey]: string };

    const rulesKeys = Object.keys(preparedRules) as RulesKey[];

    const styles = rulesKeys.reduce<Styles>((styleMap, name) => {
        const preparedRule = preparedRules[name] as TRule<PropsWithTheme>;

        styleMap[name] = renderer.renderRule(preparedRule, {
            ...otherProps,
            theme,
        });

        return styleMap;
    }, {} as Styles);

    type Rules = { [key in RulesKey]: TRule<PropsWithTheme> };

    const boundRules = rulesKeys.reduce<Rules>((ruleMap, name) => {
        ruleMap[name] = (props: PropsWithoutExtend) =>
            preparedRules[name](
                {
                    theme,
                    ...props,
                },
                renderer,
            );

        return ruleMap;
    }, {} as Rules);

    return React.useMemo(
        () => ({
            styles,
            rules: boundRules,
            theme,
        }),
        [styles, theme, boundRules],
    );
}
