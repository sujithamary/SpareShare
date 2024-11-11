import React from 'react';
import './VolunteerAd.css';
import { Link } from 'react-router-dom';

const VolunteerAd = () => {
  return (
    <div className="volunteer-impact-container">
      <div className="impact-text">
        <span className="impact-label">● Your Impact</span>
        <h2>Are you interested in Volunteering?</h2>
        <p className="highlight">Make a difference through volunteering</p>
      </div>
      
      <div className="cta-box">
        <h3>Ready To Bring The Change? Let’s Get To Work Now!</h3>
        <Link to = '/vLandingPage'><button className="cta-button">To Know More</button></Link>
      </div>
    </div>
  );
};

export default VolunteerAd;
