import React, { useEffect } from 'react';
import './AboutUs.css';
import { blue } from '@mui/material/colors';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="about-main">
      <div className="about-us-main">
        <div className="content-main">
          <h2>SpareShare's Vision - We Connect and Share</h2>
          <ul>
            <li><span className="checkmark">✔</span> Bridging the gap between surplus food and those in need</li>
            <li><span className="checkmark">✔</span> Empowering communities through volunteerism</li>
            <li><span className="checkmark">✔</span> Ensuring daily food distribution at 7 PM</li>
            <li><span className="checkmark">✔</span> Transparent and efficient donation management</li>
            <li><span className="checkmark">✔</span> Supporting NGOs and volunteers</li>
            <li><span className="checkmark">✔</span> Easy-to-use platform for donors and volunteers</li>
          </ul>
        </div>
        <div>
          <img src="" alt="About SpareShare" className="about-main-img" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
