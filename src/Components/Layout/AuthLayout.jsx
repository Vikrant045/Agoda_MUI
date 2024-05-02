import React from 'react'
import { useSelector } from 'react-redux'
import { Typography } from '@mui/material'
const AuthLayout = ({ children }) => {
    const isLoggedIn = useSelector((state)=> state.auth?.isLoggedIn || false)
    return (
       isLoggedIn ?<Typography >{children}</Typography>:<Typography sx={{m:35}}>Please login to accesss this page</Typography>   
    )
}

export default AuthLayout
