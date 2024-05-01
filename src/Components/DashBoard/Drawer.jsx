import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import PeopleIcon from '@mui/icons-material/People';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';
import { Container } from '@mui/material';

export default function Drawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const demno =()=>{
    console.log("click is done")
  }

  return (
    <Container maxWidth="300px" sx={{ height: '100vh', backgroundColor: "#203354",marginLeft:"8px",    boxShadow: "2px -29px 10px #070708"
  }}>
      <Box component="span" sx={{ display: 'inline-block', width: '100%', backgroundColor: "#203354", height: '100%',padding:"10px" ,paddingLeft:"0px",paddingRight:"0px"}}>
        <List sx={{ width: '280px' }}>
          <Link to="/dashboard/allusers" style={{ textDecoration: 'none', color: 'inherit' }} onClick={toggleDrawer(false)}>
            <ListItem disablePadding   sx={{
    '&:hover': {
      opacity:"0.7"
    },
  }} >
              <ListItemButton>
                <ListItemIcon>
                  <PeopleIcon sx={{color:"white",fontWeight: 'bold',}}/>
                </ListItemIcon>
                <ListItemText sx={{color:"white",marginLeft:"5px",fontWeight: 'bold'}}>All Users</ListItemText>
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to="/dashboard/profile" style={{ textDecoration: 'none', color: 'inherit' }} onClick={toggleDrawer(false)}>
            <ListItem disablePadding  sx={{
    '&:hover': {
      backgroundColor:"6d6afc"
    },
  }}>
              <ListItemButton>
                <ListItemIcon >
                  <AccountBoxIcon sx={{color:"white",fontWeight: 'bold'}}/>
                </ListItemIcon>
                <ListItemText sx={{color:"white",fontWeight: 'bold',marginLeft:"5px"}}>Profile</ListItemText>
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to="/dashboard/setting" style={{ textDecoration: 'none', color: 'inherit' }} onClick={toggleDrawer(false)}>
            <ListItem disablePadding  sx={{
    '&:hover': {
      opacity:"0.7"
    },
  }}>
              <ListItemButton>
                <ListItemIcon>
                  <SettingsIcon sx={{color:"white",fontWeight: 'bold'}}/>
                </ListItemIcon>
                <ListItemText sx={{color:"white",fontWeight: 'bold',marginLeft:"5px"}}>Setting</ListItemText>
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to="/dashboard/contact" style={{ textDecoration: 'none', color: 'inherit' }} onClick={toggleDrawer(false)}>
            <ListItem disablePadding  sx={{
    '&:hover': {
      opacity:"0.7"
    },
  }}>
              <ListItemButton>
                <ListItemIcon>
                  <MailIcon sx={{color:"white",fontWeight: 'bold'}} />
                </ListItemIcon>
                <ListItemText sx={{color:"white",fontWeight: 'bold',marginLeft:"5px"}}>Contact</ListItemText>
              </ListItemButton>
            </ListItem>
          </Link>
        </List>

      </Box>
    </Container>
  );
}
