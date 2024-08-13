import React, { useEffect, useState } from 'react';
import "../VolunteerNavbar/SideMenu.css";

const SideMenu = ({ isOpen, onClose }) => {
  const [donationRequests, setDonationRequests] = useState([]);

  useEffect(() => {
    if (isOpen) {
      
    }
  }, [isOpen]);

  return (
    <div className={`side-menu ${isOpen ? 'active' : ''}`}>
      <button className='close-btn' onClick={onClose}>X</button>
      <h2>Donation Requests</h2>
      <div className='menu-content'>
        {donationRequests.length > 0 ? (
          donationRequests.map(request => (
            <div key={request.id} className='menu-item'>
              <span>{request.details}</span>
            </div>
          ))
        ) : (
          <p>No donation requests available.</p>
        )}
      </div>
    </div>
  );
}

export default SideMenu;
