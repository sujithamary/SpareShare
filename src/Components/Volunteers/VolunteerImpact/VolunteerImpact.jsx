import React from 'react';
import './VolunteerImpact.css';
import { Link } from 'react-router-dom';

const VolunteerImpact = () => {
  return (
    <div className="volunteer-impact-container">
      <div className="impact-text">
        <span className="impact-label">● Your Impact</span>
        <h2>Helping Distribute Surplus Food to Those in Need</h2>
        <p className="highlight">Make a difference through volunteering</p>
      </div>
      
      <div className="cta-box">
        <h3>Ready To Bring The Change? Let’s Get To Work Now!</h3>
        <Link to = '/vRegister'>
        <button className="cta-button">Become a Volunteer</button>
        </Link>
      </div>
    </div>
  );
};

export default VolunteerImpact;
