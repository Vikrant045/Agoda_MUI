import React from 'react';
import Footer from '../../Components/Footer';
import DashAppBar from '../../Pages/admin/DashAppBar';
import SideBar from '../DashBoard/SideBar';
import { Outlet } from 'react-router-dom';
import { Typography } from '@mui/material';

const AdminLayout = () => {
    return (
        <>
            <DashAppBar />
            <Typography sx={{display:"flex"}}>
                <Typography  component="div"sx={{ height: '100vh' ,}}>
                <SideBar />
                </Typography>
                <Typography>
                <Outlet />
                </Typography >
            </Typography>
            
          
         
        </>
    );
}

export default AdminLayout;
