import * as actions from './actions';

describe('actions', () => {
  describe('addArticles', () => {
    it('should have a type ADD_ARTICLES', () => {
      const articles = [{author: 'Jeff', title: 'News'}];
      const expectedAction = {
        type: 'ADD_ARTICLES',
        articles: [{author: 'Jeff', title: 'News'}]
      }
      const result = actions.addArticles(articles);
    })

  })
})