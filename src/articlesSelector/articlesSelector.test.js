import { articlesSelector } from './articlesSelector';
import { mockArticles } from '../apiCalls/mockArticles';

describe('articlesSelector', () => {
  it('should return correct searchKeyword based on pathname', () => {
    const pathname = '/';
    const expected = 'psychology';
    const result = articlesSelector(pathname);

    expect(result).toEqual(expected);
  });

  it('should return correct searchKeyword based on pathname', () => {
    const pathname = '/resilience';
    const expected = 'inspiration';
    const result = articlesSelector(pathname);

    expect(result).toEqual(expected);
  });

  it('should return correct searchKeyword based on pathname', () => {
    const pathname = '/parenting';
    const expected = 'parenting';
    const result = articlesSelector(pathname);

    expect(result).toEqual(expected);
  });

  it('should return correct searchKeyword based on pathname', () => {
    const pathname = '/psychotherapy';
    const expected = 'psychotherapy';
    const result = articlesSelector(pathname);

    expect(result).toEqual(expected);
  });

  it('should return correct searchKeyword based on pathname', () => {
    const pathname = '/speaking';
    const expected = 'psychology';
    const result = articlesSelector(pathname);

    expect(result).toEqual(expected);
  });

  it('should return correct searchKeyword based on pathname', () => {
    const pathname = '/family';
    const expected = 'parenting';
    const result = articlesSelector(pathname);

    expect(result).toEqual(expected);
  });
});