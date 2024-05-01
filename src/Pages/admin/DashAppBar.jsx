import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const DashAppBar = () => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "white" ,zIndex:1000, position: 'relative'}}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", padding: "8px 0px" }}>
        <Typography component="span" variant="h4" color="secondary" sx={{ color: "blue" }}>
          Agoda
        </Typography>
        <Typography component="span" variant="h6" sx={{ color: "black" ,marginLeft: "250px",fontSize:"30px"}}>
          Dashboard
        </Typography>
        <Typography variant="h6" sx={{ color: "black", marginLeft: "auto" }}>
          <AccountCircleIcon /> 
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default DashAppBar;
