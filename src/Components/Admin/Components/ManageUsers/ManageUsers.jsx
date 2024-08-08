import React, { useState, useEffect } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Link } from '@mui/material';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import axios from 'axios';
import '../ManageUsers/ManageUsers.css';

const DataTable = () => {
  const [rows, setRows] = useState([]);
  const [open, setOpen] = useState(false);
  const [editingRow, setEditingRow] = useState(null);
  const [formData, setFormData] = useState({
    userId: null,
    userFirstName: '',
    userLastName: '',
    userPhoneNumber: '',
    userEmail: '',
    userPassword: '',
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/getAllUsers');
      const usersWithId = response.data.map((user) => ({
        ...user,
        id: user.userId, 
      }));
      setRows(usersWithId);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleClickOpen = (row = null) => {
    setEditingRow(row);
    if (row) {
      setFormData({
        userId: row.userId,
        userFirstName: row.userFirstName,
        userLastName: row.userLastName,
        userPhoneNumber: row.userPhoneNumber,
        userEmail: row.userEmail,
        userPassword: '', 
      });
    } else {
      setFormData({
        userId: null,
        userFirstName: '',
        userLastName: '',
        userPhoneNumber: '',
        userEmail: '',
        userPassword: '',
      });
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setFormData({
      userId: null,
      userFirstName: '',
      userLastName: '',
      userPhoneNumber: '',
      userEmail: '',
      userPassword: '',
    });
  };

  const handleSave = async () => {
    try {
      if (editingRow) {
        await axios.put(`http://localhost:8080/updateUser/${formData.userId}`, formData);
      } else {
        await axios.post('http://localhost:8080/addNewUser', formData);
      }
      fetchUsers();
      handleClose();
    } catch (error) {
      console.error("Error saving user:", error.response ? error.response.data : error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/deleteUser/${id}`);
      fetchUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const columns = [
    { field: 'userFirstName', headerName: 'First Name', width: 150 },
    { field: 'userLastName', headerName: 'Last Name', width: 150 },
    { field: 'userPhoneNumber', headerName: 'Phone Number', width: 150 },
    { field: 'userEmail', headerName: 'Email', width: 200 },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => (
        <div className="action">
          <Link className="edit-link" onClick={() => handleClickOpen(params.row)}>
            <FaEdit />
          </Link>
          <Link className="delete-link" onClick={() => handleDelete(params.row.userId)}>
            <MdDelete />
          </Link>
        </div>
      )
    }
  ];

  return (
    <div className='dataTable'>
      <Button variant="contained"  onClick={() => handleClickOpen()} style={{marginTop: "20px", background: "#135d66", marginBottom: "10px" }}>
        Add User
      </Button>
      <DataGrid
        className='dataGrid'
        rows={rows}
        columns={columns}
        getRowId={(row) => row.userId} 
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          }
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
        autoHeight
      />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{editingRow ? "Edit User" : "Add User"}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="First Name"
            type="text"
            fullWidth
            value={formData.userFirstName}
            onChange={(e) => setFormData({ ...formData, userFirstName: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Last Name"
            type="text"
            fullWidth
            value={formData.userLastName}
            onChange={(e) => setFormData({ ...formData, userLastName: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Phone Number"
            type="text"
            fullWidth
            value={formData.userPhoneNumber}
            onChange={(e) => setFormData({ ...formData, userPhoneNumber: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Email"
            type="email"
            fullWidth
            value={formData.userEmail}
            onChange={(e) => setFormData({ ...formData, userEmail: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Password"
            type="password"
            fullWidth
            value={formData.userPassword}
            onChange={(e) => setFormData({ ...formData, userPassword: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} style = {{color: "#135d66"}}>
            Cancel
          </Button>
          <Button onClick={handleSave} style = {{color: "#135d66"}}>
            {editingRow ? "Update" : "Add"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DataTable;
