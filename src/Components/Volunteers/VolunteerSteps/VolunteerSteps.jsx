import React from 'react';
import { PiNumberCircleOneFill , PiNumberCircleTwoFill , PiNumberCircleThreeFill, PiNumberCircleFourFill} from "react-icons/pi";
import './VolunteerSteps.css';
import img1 from './vol-steps.png';

const VolunteerSteps = () => {
  return (
    <div className="volunteer-steps-container">
      <div className="volunteer-steps-image">
        <img src={img1} alt="Volunteer Illustration" />
      </div>
      <div className='volunteer-steps-content'>
      <h1>How to Volunteer with Surplusshare</h1>
      <p className="volunteer-steps-description">
        Follow these simple steps to start making a difference by delivering surplus resources to those in need.
      </p>
      <div className="vol-step">
          <div className="vol-step-icon">
          <PiNumberCircleOneFill />
          </div>
          <div className="vol-step-content">
            <h2>View Donations List</h2>
            <p>Access a comprehensive list of available donations that need volunteers. You can filter by category, urgency, or location to find opportunities that match your preferences.</p>
          </div>
        </div>
        
        <div className="connector-line"></div>
        
        <div className="vol-step">
          <div className="vol-step-icon">
          <PiNumberCircleTwoFill />    
          </div>
          <div className="vol-step-content">
            <h2>Choose Nearby Donations</h2>
            <p>Select donations close to your location, making it easier to pick up and minimizing travel time for efficient volunteering.</p>
          </div>
        </div>
     
        <div className="connector-line"></div>
       
        <div className="vol-step">
          <div className="vol-step-icon">
          <PiNumberCircleThreeFill />
          </div>
          <div className="vol-step-content">
            <h2>Pickup from Donor</h2>
            <p>Coordinate with the donor to arrange a convenient pickup. Ensure items are collected responsibly to maintain quality and meet safety standards.</p>
          </div>
        </div>

        <div className="connector-line"></div>
       
        <div className="vol-step">
          <div className="vol-step-icon">
          <PiNumberCircleFourFill />
          </div>
          <div className="vol-step-content">
            <h2>Deliver to NGOs</h2>
            <p>Transport the collected donations to partner NGOs who will distribute them to those in need, completing your volunteer journey.</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerSteps;
