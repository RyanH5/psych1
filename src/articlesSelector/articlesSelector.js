export const articlesSelector = (pathname) => {
  let searchKeyWord = null;
  switch(pathname) {
    case '/':
      searchKeyWord = 'psychology'
      return searchKeyWord;
    
    case '/resilience':
      searchKeyWord = 'inspiration'
      return searchKeyWord;

    case '/parenting':
      searchKeyWord = 'parenting';
      return searchKeyWord;

    case '/psychotherapy':
      searchKeyWord = 'psychotherapy';
      return searchKeyWord;

      case '/speaking':
      searchKeyWord = 'psychology'
      return searchKeyWord;

      case '/family':
      searchKeyWord = 'parenting'
      return searchKeyWord;

      case '/contact':
      searchKeyWord = 'uplifting'
      return searchKeyWord;

      default:
        return searchKeyWord;
  }
}
