import React, { useState } from 'react';
import { MdAdminPanelSettings, MdMessage } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
// import SideMenu from '../../../Volunteers/VolunteerNavbar/SideMenu'; 
import "../AdminNavbar/AdminNavbar.css";

const AdminNavbar = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const handleMessageClick = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  return (
    <>
      <div className='a-navbar'>
        <div className='a-logo'>
          <MdAdminPanelSettings />
          <span>Admin</span>
        </div>
        <div className='a-icons'>
          {/* <MdMessage onClick={handleMessageClick} /> */}
          <div className='a-user'>
            <CgProfile />
            <span>Suji</span>
          </div>
        </div>
      </div>
      {/* <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} /> */}
    </>
  );
}

export default AdminNavbar;
