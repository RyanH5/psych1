import React from 'react';
import './styles.css';


const PsychHome = () => {
  return (
    <div className="content-container">
      <div className="top-two">
      <p className="first-paragraph">This website is intended to provide resources to assist you in making decisions about your physical health, brain health and emotional health. I have been working in the field of psychology for over 25 years. My practice involves providing resilience training to healthcare providers, schools and families. In addition, I provide Effective Parenting Seminars as well as psychotherapy for children, adolescents, adults and families. I am often invited to speak to parents, school staff, healthcare professionals, and organizations about developing mind-body- heart skills and resiliency skills. <div className="uncle-k"></div>I invite you to review the resources and please feel free to contact me if I can be further assistance. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. My practice involves providing resilience training to healthcare providers, schools and families. In addition, I provide Effective Parenting Seminars as well as psychotherapy for children, adolescents, adults and families. I am often invited to speak to parents, school staff, healthcare professionals, and organizations about developing mind-body- heart skills and resiliency skills.</p>
      <div className="both-schedules">
      <div className="seminar-schedule">
            <h2>Seminar Schedule</h2>
            <h3>Parentin on Purpose</h3>
            <h4>May 4 - May 5, 2018</h4>
            <span>Friday 7:00pm - 9:00pm</span>
            <span>Saturday 2:00 - 7:00pm</span>
            <span>Price $50</span>
            <span>Family Conference</span>
            <span>Culver City, California</span>
          </div>
          <div className="training-schedule">
            <h2>Training/Speaking Schedule</h2>
            <h3>MACMH Fall Conference</h3>
            <span>Mount Zion, 1300 Summit Ave</span>
            <span>St. Paul Mn
              <span className="zip">5510
              </span>
            </span>
            <span>November 30, 2018</span>
            <span>Developing Resilience Skills with</span>
            <span>Elementary and Middle School</span>
            <span>Aged Children</span>
            <a 
              className="child-health-link"
              href="http://www.macmh.org/" 
              target="_blank">
              Minnesota Association for Childrens Mental Health
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}

export default PsychHome;