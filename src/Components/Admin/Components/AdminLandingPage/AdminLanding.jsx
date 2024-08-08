// AdminLanding.js
import React from 'react';
import AdminFooter from '../AdminFooter/AdminFooter';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import AdminMenu from '../AdminMenu/AdminMenu';
import { Outlet } from 'react-router-dom';
import './AdminLanding.css';
import AdminHome from '../AdminHome/AdminHome';

const AdminLanding = () => {
  return (
    <div className="admin-container">
      <AdminNavbar />
      <div className="admin-content">
        <AdminMenu />
        <div className="admin-main-content">
          <Outlet />
        </div>
      </div>
      <AdminFooter />
    </div>
  );
}

export default AdminLanding;
