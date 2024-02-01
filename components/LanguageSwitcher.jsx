import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n.js';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="language-switcher-container">
      <button className="language-switcher-button" onClick={() => changeLanguage('en')}>English</button>
      <button className="language-switcher-button" onClick={() => changeLanguage('hu')}>Magyar</button>
      <button className="language-switcher-button" onClick={() => changeLanguage('de')}>Deutsch</button>
    </div>
  );
};

export default LanguageSwitcher;
