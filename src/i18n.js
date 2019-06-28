import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            "Activate Your Account": "Activate Your Account",
            "Page": "Page",
            "Ready to process real transactions with us? Great!": "Ready to process real transactions with us? Great!"
        }
    },
    id: {
        translation: {
            "Activate Your Account": "Aktifkan Akun Anda",
            "Page": "Halaman",
            "Ready to process real transactions with us? Great!": "Siap untuk bertransaksi dengan kami? Hebat!"
        }
    }
};

i18n.use(initReactI18next).init({
    resources,
    lng: "id",
    debug: true,
    keySeparator: false,
    interpolation: {
        escapeValue: false,
    }
});

export default i18n;