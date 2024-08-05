import React from 'react';
import "../ManageUsers/ManageUsers.css";
import DataTable from '../AdminDataTable/DataTable';

const ManageUsers = () => {
  return (
    <div className='users'>
      <div className="info">
        <h1>Users</h1>
        <button>Add New User</button>
      </div>
      <DataTable/>
    </div>
  );
}

export default ManageUsers;
