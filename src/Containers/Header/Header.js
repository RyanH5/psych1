import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <h1>Kevin Harrington, Ph.D.</h1>
      <div>
        <NavLink
          to="/"
          className="nav home">
          Home
        </NavLink>
      </div>
      <NavLink
        to="/resilience"
        className="nav resilience">
        Resilience<span>Training</span>
      </NavLink>
      <NavLink
        to="/parenting"
        className="nav parenting">
        Parenting<span>Seminars</span>
      </NavLink>
      <NavLink
        to="/psychotherapy"
        className="nav psychotherapy">
        Psychotherapy
      </NavLink>
      <NavLink
        to="/speaking"
        className="nav speaking">
        Speaking and<span>Training</span>
      </NavLink>
      <NavLink
        to="/family"
        className="nav family">
        Family<span>Coaching</span>
      </NavLink>
    </div>
  )
}

export default Header;