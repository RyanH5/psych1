import React from 'react';
import { NavLink } from 'react-router-dom';
import { Route } from 'react-router'
import SignInPage from '../../Components/SignIn/SignIn'
import SignUpPage from '../../Components/SignUp/SignUp'

import PsychHome from '../../Components/PsychHome/PsychHome'
import './Header.css';
import myFunction from '../../hamburgerFn/hamburgerFn'

const Header = () => {
  return (
    <header id="myTopnav" className="topnav">
      <h1 className="app-name">Kevin Harrington, Ph.D.</h1>
        <ul className="menu">
          <div className="dropdown">
            <NavLink 
              to="/"
              className=" active">
              Home
            </NavLink>
          </div>
          <div className="dropdown">
            <NavLink 
            to="/resilience"
            className="nav drop-btn">
              Resilience Training
            </NavLink>
          </div>
          <div className="dropdown">
            <NavLink 
              to="/parenting"
              className="nav drop-btn">
              Parenting Seminars
            </NavLink>
            </div>
            <div className="dropdown">
              <NavLink 
                to="/psychotherapy"
                className="nav drop-btn">
                Psychotherapy
              </NavLink>
            </div>
            <div className="dropdown">
              <NavLink 
                to="/family"
                className="nav drop-btn">
                Family Coaching
              </NavLink>
            </div>
            <div className="dropdown">
              <NavLink 
                to="/contact"
                className="nav drop-btn">
                Contact
              </NavLink>
            </div>
          <a className="icon" onClick={() => myFunction()}>&#9776;</a>
        </ul>
      </header>
  )
}

export default Header;