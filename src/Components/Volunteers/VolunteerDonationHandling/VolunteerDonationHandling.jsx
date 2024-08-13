import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Dialog, DialogTitle, DialogContent, IconButton, Typography, Box, Grid } from '@mui/material';
import { Check } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

const VolunteerDonationHandling = () => {
  const [rows, setRows] = useState([]);
  const [error, setError] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const location = useLocation();

  const handleViewDetails = (row) => {
    setSelectedRow(row);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedRow(null);
  };

  
  const handleApprove = (id) => {
    axios.put(`http://localhost:8080/api/admin/updateDonationRequest/${id}`, {status : "Accepted"} ,{
      headers: {
          'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      console.log(response);
      setRows(rows.map(row => 
        row.id === id ? { ...row, status : "Accepted" } : row
      ));
    })
    .catch((error) => {
      console.error('Error approving donation:', error);
    });
  };
  

  const columns = [
    { field: 'username', headerName: 'User Name', width: 130 },
    { field: 'mobileNumber', headerName: 'Mobile Number', width: 130 },
    { field: 'address', headerName: 'Address', width: 200 },
    { field: 'donationDate', headerName: 'Donation Date', width: 130 },
    { field: 'categoryType', headerName: 'Category Type', width: 130 },
    { field: 'categoryDetails', headerName: 'Category Details', width: 150 },
    { field: 'message', headerName: 'Message', width: 130 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 350,
      renderCell: (params) => {
        const { status, id } = params.row;
        return (
          <div style={{ display: 'flex', gap: '8px' }}>
            {status === "Pending" && (
              <>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  onClick={() => handleViewDetails(params.row)}
                >
                  View Details
                </Button>
                <Button
                  variant="contained"
                  color="success"
                  size="small"
                  startIcon={<Check />}
                  onClick={() => handleApprove(id)}
                >
                  Approve
                </Button>                
              </>
            )}
            {status === "Accepted" && (
              <Typography variant="body1" sx={{ color: 'green'}}>
              Approved
            </Typography>
            )}
          </div>
        );
      },
    },
  ];  

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 12 },
          },
        }}
        pageSizeOptions={[12, 24]}
        checkboxSelection
      />
      <Dialog open={openModal} onClose={handleCloseModal} maxWidth="sm" fullWidth>
        <DialogTitle style={{color: "#135d66", fontWeight: 'bold'}}>
          Donation Details
          <IconButton
            aria-label="close"
            onClick={() => {
              handleCloseModal();
            }}
            sx={{ position: 'absolute', right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          {selectedRow && (
            <Box component="div">
              {Object.entries({
                'User Name': selectedRow.username,
                'Mobile Number': selectedRow.mobileNumber,
                'Address': selectedRow.address,
                'Donation Date': selectedRow.donationDate,
                'Category Type': selectedRow.categoryType,
                'Category Details': selectedRow.categoryDetails,
                'Message': selectedRow.message,
              }).map(([key, value], index) => (
                <Grid container key={index} spacing={1}>
                  <Grid item xs={4} style={{ marginBottom: '12px' }}>
                    <Typography variant="body1" sx={{ fontWeight: 'bold'}}>
                      {key} :
                    </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography variant="body1">{value}</Typography>
                  </Grid>
                </Grid>
              ))}
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default VolunteerDonationHandling;
