import React from 'react';
import { NewsArticles } from '../NewsArticles/NewsArticles';
import Home from '../Home/Home';
import { Route } from 'react-router-dom';

export const Main = () => {
  return (
    <div>
      <Route
        exact path="/"
        component={Home}
      />
    </div>
  )
}