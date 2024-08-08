import React from 'react';
import './Vision.css';
import { Link } from 'react-router-dom';

const Vision = () => {
  return (
    <div className="vision-page">
      <div className="vision-content">
        <h1>Get To Know Us</h1>
        <h1 className="vision-title">
          About SpareShare
        </h1>
        <h2 className="vision-subtitle">
        At SpareShare, our mission is to bridge the gap between surplus food and those who need it most.

We facilitate the donation of surplus food from event organizers, restaurants, and individuals to underserved communities. Our innovative 7 O'Clock Scheme ensures that meals are distributed consistently every day at 7 PM, providing reliable support for those facing food insecurity.

We also support volunteers and NGOs with essential services like food delivery and cooking, making their efforts more effective. Our points system rewards contributors for their involvement, fostering a community dedicated to positive change.

Join us in transforming surplus into support and making a meaningful impact on those in need. Every contribution helps create a more equitable and compassionate world.
        </h2>
        <Link to="/GetInvolved">
          <button className="vision-button">Join us in making a difference</button>
        </Link>
      </div>
      <img src="" alt="SpareShare Vision" className='vision-image' />
    </div>
  );
};

export default Vision;
