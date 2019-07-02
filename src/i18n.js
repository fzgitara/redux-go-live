import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en/translation.json';
import idTranslation from './locales/id/translation.json';
import enEx from './locales/en/ex.json';
import idEx from './locales/id/ex.json';

const enTrans = {...enTranslation, ...enEx};
const idTrans = Object.assign(idTranslation, idEx);

const resources = {
    en: {
        translation: enTrans
    },
    id: {
        translation: idTrans
    }
};

console.log(enTrans)

i18n.use(initReactI18next).init({
    resources,
    lng: "en",
    debug: true,
    keySeparator: false,
    interpolation: {
        escapeValue: false,
    }
});

export default i18n;