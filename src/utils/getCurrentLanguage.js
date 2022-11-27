import Cookies from 'js-cookie';
import languages from '../components/LanguageButton/LanguageConstants';

const getCurrentLanguage = () => {
  const currentLanguageCode = Cookies.get('i18next') || 'en';
  const currentLanguage = languages.find(
    (language) => language.code === currentLanguageCode
  );
  return currentLanguage;
};

export default getCurrentLanguage;
