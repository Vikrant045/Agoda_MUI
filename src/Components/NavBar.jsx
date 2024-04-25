import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';

function NavBar() {
    const pages = ['Flight + Hotel', 'Hotel & Rooms', 'Transports', 'Activities'];

    return (
        <AppBar position="fixed" sx={{ backgroundColor: "white" }}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-evenly", padding: "8px 0px" }}>
                <Typography variant="h4" color="secondary" sx={{ color: "blue" }}>
                    Agoda
                </Typography>
                {
                    pages.map((page, idx) => {
                        return (
                            <Typography variant="h6" key={idx} sx={{ color: "black" }}>
                                {page}
                            </Typography>
                        )
                    })
                }
                <Button
                    variant="outlined"
                    size='medium'
                    sx={{ fontSize: "0.9rem", fontWeight: "semibold", }}
                >
                    list your Place</Button>

                <Button variant="text">Sign In </Button>

                <Button
                    variant="outlined"
                    size="medium"
                    sx={{ fontSize: "0.9rem", fontWeight: "semibold",  }}
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
