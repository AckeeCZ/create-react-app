import { localizationReducerFactory } from '../dependencies';
import { languages } from '../config';

const getInitialLanguage = () => {
    let language = languages[0];
    const lang = window ? window.navigator.language : undefined;
    const langSplitted = lang.split('-')[0];

    if (languages.includes(lang)) {
        language = lang;
    } else if (languages.includes(langSplitted)) {
        language = langSplitted;
    }

    return language;
};

const language = getInitialLanguage();

export default localizationReducerFactory(language);
