import { useEffect } from 'react';
import { appWithTranslation } from 'next-i18next';
import i18n from '../i18n';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
