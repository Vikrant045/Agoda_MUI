import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';

function NavBar() {

    const navPages = [
        {
            name: "Flight + Hotel",
            slug: '/'
        },
        {
            name: "Hotel & Rooms",
            slug: '/'
        },
        {
            name: "Transports",
            slug: '/'
        },
        {
            name: "Contact Us",
            slug: '/contact'
        },
    ];

    const navigate = useNavigate()
    const handleClick = () => {
        console.log(" dash clicked")
        navigate("/dashboard")
    }
    return (
        <AppBar position="fixed" sx={{ backgroundColor: "white" ,borderRadius:1,marginLeft:"15px"}}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-evenly", padding: "8px 0px" }}>
                <Link to={'/'}>
                    <Typography variant="h5" color="secondary" sx={{ color: "blue" }}>
                        Agoda
                    </Typography>
                </Link>
                {
                    navPages.map((navItem, idx) => {
                        return (
                            <Link to={navItem.slug} key={idx}>
                                <Typography variant="h7" sx={{ color: "black" }} >
                                    {navItem.name}
                                </Typography>
                            </Link>
                        )
                    })
                }
                <Link to="/dashboard">
                    <Typography variant="h7" sx={{ color: "black" }} onClick={handleClick}>
                        Dashboard
                    </Typography>
                </Link>
                <Button
                    variant="outlined"
                    size='medium'
                    sx={{ fontSize: "0.8rem", fontWeight: "semibold", }}
                >
                    list your Place</Button>

                <Button
                 variant="text"                    
                  onClick={()=> navigate("/signIn")}
                   >Sign In </Button>

                <Button
                    variant="outlined"
                    size="medium"
                    sx={{ fontSize: "0.8rem", fontWeight: "semibold", }}
                    onClick={()=> navigate("/signUp")}

                >
                    Create Account</Button>

                <Typography
                    size="large"
                    edge="start"

                    aria-label="menu"
                >
                    <MenuIcon fontSize='large' color='black' sx={{ color: "black", '&:hover': { color: "white", padding: "5px", backgroundColor: "blue" } }}

                    />
                </Typography>

            </Toolbar>
        </AppBar>
    )
}

export default NavBar
