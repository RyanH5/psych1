import React from 'react';
import { fetchArticles } from './apiCalls';
import { mockArticles } from './mockArticles';
import { apiKey } from '../apiKey';

describe('api-calls', () => {
  describe('fetchArticles', () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(mockArticles)
      }))
    });
    it('should call fetch with the correct params', async () => {
      let url = `https://newsapi.org/v2/everything?q=Psychology&from=2018-07-20&sortBy=popularity&apiKey=${apiKey}`;
      let Psychology = 'Psychology';
      await fetchArticles(Psychology);

      expect(window.fetch).toHaveBeenCalledWith(url);
    });
  });
});