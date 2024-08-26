import { useEffect } from 'react';
import { initReactI18next } from 'react-i18next';
import i18n from '../i18n';
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    initReactI18next({
      i18n,
    });
  }, []);

  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
