export const getLanguageAPI = (loc) => {
  const URL = import.meta.env.VITE_LOOKBOOK_URL;

  switch (loc) {
    case 'us':
      return `${URL}/us/en`;
    case 'ca':
      return `${URL}/ca/en`;
    case 'fr':
      return `${URL}/ca/fr`;
    default:
      return `${URL}/us/en`;
  }
};
