import { articlesReducer } from './articlesReducer';
import * as actions from '../../actions/actions';

describe('articlesReducer', () => {
  it('should return initial state', () => {
    const expected = [];
    const result = articlesReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return state with new movie', () => {
    const articles = [{title: 'Yardwork', author: 'My Dad'}];
    const expected = articles;
    const result = articlesReducer(undefined, actions.addArticles(articles));

    expect(result).toEqual(expected);
  });
})