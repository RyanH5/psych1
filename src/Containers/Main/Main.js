import React from 'react';
import { NewsArticles } from '../NewsArticles/NewsArticles';
import DisplayPage from '../DisplayPage/DisplayPage';
import { Route } from 'react-router-dom';
import './Main.css';
import SignInPage from '../../Components/SignIn/SignIn';
import SignUpPage from '../../Components/SignUp/SignUp';

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
        exact path="/signup"
        component={SignUpPage}
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