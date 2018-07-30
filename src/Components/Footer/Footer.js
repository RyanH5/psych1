import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

export const Footer = () => {
  return (
    <footer>
      <div>
        <span className="footer-address">8009 34th Ave S STE 1490</span>
        <span className="footer-address">Bloomington, MN 55425</span>
        <span className="footer-address"><strong>612-766-9255</strong></span>
      </div>
      <NavLink 
        to="/signin"
        className="nav drop-btn admin-login">
        Admin
      </NavLink>
    </footer>
  )
}