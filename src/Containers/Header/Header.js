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
    // <header>
    //   <ul className="menu">
    //     <li><NavLink 
    //       to="/"
    //       className="nav drop-btn">
    //       Home
    //     </NavLink>
    //     <div className="dropdown">
    //       <li><NavLink 
    //       to="/resilience"
    //       className="nav drop-btn">
    //         Resilience Training
    //       </NavLink>
    //         <div className="dropdown-content">
    //           <p>Schools</p>
    //           <p>Professionals</p>
    //           <p>Teen Resilience Program</p>
    //           <p>Families</p>
    //         </div>
    //     </div>
    //     <div className="dropdown">
    //     <li><NavLink 
    //       to="/parenting"
    //       className="nav drop-btn">
    //       Parenting Seminars
    //     </NavLink>
    //     </div>
    //     <div className="dropdown">
    //       <li><NavLink 
    //         to="/psychotherapy"
    //         className="nav drop-btn">
    //         Psychotherapy
    //       </NavLink>
    //         <div className="dropdown-content">
    //           <p>Family Therapy</p>
    //           <p>Adult Therapy</p>
    //           <p>Adolescent and Child Therapy</p>
    //         </div>
    //     </div>
    //     <div className="dropdown">
    //       <li><NavLink 
    //         to="/speaking"
    //         className="nav drop-btn">
    //         Speaking and  Training
    //       </NavLink>
    //         <div className="dropdown-content">
    //           <p>Schools</p>
    //           <p>Clinicians and Human Service Providers</p>
    //           <p>Church Ministries and Youth Workers</p>
    //         </div>
    //     </div>
    //     <li><NavLink 
    //       to="/family"
    //       className="nav drop-btn">
    //       Family Coaching
    //     </NavLink>
    //       <li><NavLink 
    //         to="/contact"
    //         className="nav drop-btn">
    //         Contact
    //       </NavLink>
    //     </ul>     
    //   </header>
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