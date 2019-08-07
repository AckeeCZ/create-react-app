import { addLocaleData, csLocales, csAntd, translations } from '../dependencies';

addLocaleData([...csLocales]);

export const languages = ['cs'];

export const intlData = {
    cs: translations.cs,
};

export const antdData = {
    cs: csAntd,
};
