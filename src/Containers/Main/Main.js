import React from 'react';
import { NewsArticles } from '../NewsArticles/NewsArticles';
import DisplayPage from '../DisplayPage/DisplayPage';
import { Route } from 'react-router-dom';

export const Main = () => {
  return (
    <div>
      <Route
        exact path="/"
        component={DisplayPage}
      />
      <Route
        exact path="/resilience"
        component={DisplayPage}
      />
      <Route
        exact path="/parenting"
        component={DisplayPage}
      />
      <Route
        exact path="/psychotherapy"
        component={DisplayPage}
      />
      <Route
        exact path="/speaking"
        component={DisplayPage}
      />
      <Route
        exact path="/family"
        component={DisplayPage}
      />
    </div>
  )
}