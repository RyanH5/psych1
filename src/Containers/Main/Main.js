import React from 'react';
import { NewsArticles } from '../NewsArticles/NewsArticles';
import DisplayPage from '../DisplayPage/DisplayPage';
import { Route } from 'react-router-dom';
import './Main.css';
import SignInPage from '../../Components/SignIn/SignIn';

export const Main = () => {
  return (
    <div className="main-container">
      <Route
        exact path="/"
        component={DisplayPage}
      />
      <Route
        exact path="/signin"
        component={SignInPage}
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
      <Route
        exact path="/contact"
        component={DisplayPage}
      />
      <Route
        exact path="/home"
        component={DisplayPage}
      />
      <Route
        exact path="/account"
        component={DisplayPage}
      />
    </div>
  )
}