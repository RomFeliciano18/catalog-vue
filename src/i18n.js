import { createI18n } from 'vue-i18n';
import us from './locales/us.json';
import ca from './locales/ca.json';
import fr from './locales/fr.json';

const i18n = createI18n({
  legacy: false,
  locale: 'us',
  fallbackLocale: 'us',
  messages: {
    us,
    ca,
    fr,
  },
});

export default i18n;
