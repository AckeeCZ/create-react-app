import { csAntd, translations } from '../dependencies';
import { Languages } from '../constants';

export const languages = Object.values(Languages);

export const intlData = {
    [Languages.CS]: translations.cs,
};

export const antdData = {
    [Languages.CS]: csAntd,
};
