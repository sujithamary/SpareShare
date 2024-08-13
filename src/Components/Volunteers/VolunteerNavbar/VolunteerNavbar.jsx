import React, { useState } from 'react';
import { FaHome } from "react-icons/fa";
import { MdMessage } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import "../VolunteerNavbar/VolunteerNavbar.css";

const VolunteerNavbar = () => {
  
  return (
    <>
      <div className='v-navbar'>
        <div className='v-logo'>
          <img src = "" />
          <span>SurplusShare</span>
        </div>
        <div className='v-icons'>
            <FaHome />
            <MdMessage />
          <div className='v-user'>
            <CgProfile />
            <span>Suji</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default VolunteerNavbar;
