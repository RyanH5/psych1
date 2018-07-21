import React from 'react';

export const articlesReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_ARTICLES':
    console.log('act', action)

      return [...state, ...action.articles.map(article => {
        console.log('hey')
        return article
      })]
    default:
      return state;
  }
}