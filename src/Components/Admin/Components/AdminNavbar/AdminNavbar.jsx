import React from 'react';
import { IoSearchSharp } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { AiOutlineAppstore } from "react-icons/ai";
import { FaExpand } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { MdAdminPanelSettings } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import "../AdminNavbar/AdminNavbar.css";

const AdminNavbar = () => {
  return (
    <div className='a-navbar'>
        <div className='a-logo'>
            <MdAdminPanelSettings />
            <span>Admin</span>
        </div>
        <div className='a-icons'>
            <IoSearchSharp />
            <AiOutlineAppstore />
            <FaExpand />
            <div className='a-notifications'>
                <IoMdNotifications />
                <span>1</span>
            </div>
            <IoMdSettings />            
            <div className='a-user'>
                <CgProfile />
                <span>Seshu</span>
            </div>
        </div>
    </div>
  );
}

export default AdminNavbar;

