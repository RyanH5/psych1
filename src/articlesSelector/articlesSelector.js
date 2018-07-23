export const articlesSelector = (url) => {
  switch(window.location.href) {
    case 'http://localhost:3000/':
      let searchKeyWord = 'psychology'
      return searchKeyWord;
    
    case 'http://localhost:3000/resilience':
      searchKeyWord = 'inspiration'
      return searchKeyWord;

    case 'http://localhost:3000/parenting':
      searchKeyWord = 'parenting';
      return searchKeyWord;

    case 'http://localhost:3000/psychotherapy':
      searchKeyWord = 'psychotherapy';
      return searchKeyWord;

      case 'http://localhost:3000/speaking':
      searchKeyWord = 'psychology'
      return searchKeyWord;

      case 'http://localhost:3000/family':
      searchKeyWord = 'parenting'
      return searchKeyWord;
  }
}
