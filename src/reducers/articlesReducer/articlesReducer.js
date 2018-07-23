import React from 'react';

export const articlesReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_ARTICLES':
      return [...state, ...action.articles.map(article => {
        return article
      })]
    default:
      return state;
  }
}