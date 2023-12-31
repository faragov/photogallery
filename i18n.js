import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/en.json';
import huTranslation from './locales/hu.json';
import deTranslation from './locales/de.json';

const resources = {
  en: { translation: enTranslation },
  hu: { translation: huTranslation },
  de: { translation: deTranslation }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', 
  interpolation: {
    escapeValue: false 
  }
});

export default i18n;
