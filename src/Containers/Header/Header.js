import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {

  // const fetchAndCleanArticles = () => {
  //   const searchKeyWord = articlesSelector();
  //   const psychNews = await fetchArticles(searchKeyWord);
  //   const articles = await cleanPsychArticles(psychNews.articles);
  //   this.props.addArticles(articles)
  // }

  return (
    <header>
      <h1 className="app-name">Kevin Harrington, Ph.D.</h1>
      <ul className="menu">
        <li><NavLink 
          to="/"
          // onClick=""
          className="nav drop-btn">
          Home
        </NavLink></li>
        <div className="dropdown">
          <li><NavLink 
          to="/resilience"
          className="nav drop-btn">
            Resilience Training
          </NavLink></li>
            <div className="dropdown-content">
              <p>Schools</p>
              <p>Professionals</p>
              <p>Teen Resilience Program</p>
              <p>Families</p>
            </div>
        </div>
        <div className="dropdown">
        <li><NavLink 
          to="/parenting"
          className="nav drop-btn">
          Parenting Seminars
        </NavLink></li>
        </div>
        <div className="dropdown">
          <li><NavLink 
            to="/psychotherapy"
            className="nav drop-btn">
            Psychotherapy
          </NavLink></li>
            <div className="dropdown-content">
              <p>Family Therapy</p>
              <p>Adult Therapy</p>
              <p>Adolescent and Child Therapy</p>
            </div>
        </div>
        <div className="dropdown">
          <li><NavLink 
            to="/speaking"
            className="nav drop-btn">
            Speaking and  Training
          </NavLink></li>
            <div className="dropdown-content">
              <p>Schools</p>
              <p>Clinicians and Human Service Providers</p>
              <p>Church Ministries and Youth Workers</p>
            </div>
        </div>
        <li><NavLink 
          to="/family"
          className="nav drop-btn">
          Family Coaching
        </NavLink></li>
          <li><NavLink 
            to="/contact"
            className="nav drop-btn">
            Contact
          </NavLink></li>
        </ul>
      </header>
  )
}

export default Header;