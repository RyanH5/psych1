import React from 'react';
import { Route } from 'react-router'
import PsychHome from '../PsychHome/PsychHome';
import SignInPage from '../SignIn/SignIn';
import SignUpPage from '../SignUp/SignUp';
import { ResilienceTraining } from '../ResilienceTraining/ResilienceTraining';
import { Parenting } from '../Parenting/Parenting'
import { Speaking } from '../Speaking/Speaking';
import { Psychotherapy } from '../Psychotherapy/Psychotherapy';
import { Contact } from '../Contact/Contact';
import { Family } from '../Family/Family';
import './MainContent.css'
import HomePage from '../Home/Home';
import AccountPage from '../Account/Account'

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
  <Route
    exact path="/resilience"
    component={ResilienceTraining}
  />
  <Route
    exact path="/parenting"
    component={Parenting}
  />
  <Route
    exact path="/speaking"
    component={Speaking}
  />
  <Route
    exact path="/family"
    component={Family}
  />
  <Route
    exact path="/psychotherapy"
    component={Psychotherapy}
  />
  <Route
    exact path="/contact"
    component={Contact}
  />
  <Route
    exact path="/home"
    component={HomePage}
  />
  <Route
    exact path='/account'
    component={AccountPage}
      />
    </div>
  )
}

export default MainContent;
