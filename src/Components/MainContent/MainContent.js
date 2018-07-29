import React from 'react';
import psychHome from '../PsychHome/PsychHome';
import { Route } from 'react-router'
import PsychHome from '../PsychHome/PsychHome';
import SignInPage from '../SignIn/SignIn';
import SignUpPage from '../SignUp/SignUp';

const MainContent = () => {
  return (
    <div className="individual-content-container">
    <Route
    exact path="/"
    component={PsychHome}
  />
    <Route
    exact path="/signin"
    component={SignInPage}
  />
  <Route
    exact path="/signup"
    component={SignUpPage}
  />
    </div>
  )
}

export default MainContent;

// <Route
// exact path="/resilience"
// component={DisplayPage}
// />
// <Route
// exact path="/parenting"
// component={DisplayPage}
// />
// <Route
// exact path="/psychotherapy"
// component={DisplayPage}
// />
// <Route
// exact path="/speaking"
// component={DisplayPage}
// />
// <Route
// exact path="/family"
// component={DisplayPage}
// />