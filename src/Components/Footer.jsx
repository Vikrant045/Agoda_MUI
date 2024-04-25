import { Container, Grid, Typography } from '@mui/material'
import React from 'react'

function Footer() {
  return (
   <Typography component="div" sx={{display:"block", backgroundColor:"grey.200"}}>
       <Container maxWidth="lg" sx={{marginTop:"100px"}}>
      <Grid container spacing={10}>
             <Grid item  xs={12} md={3} lg={3}>
           <Typography sx={{display:"block"}} variant='h6'>Help</Typography>
           <Typography sx={{display:"block"}} variant="h7">Help Center</Typography>
           <Typography sx={{display:"block"}} variant="h7">FAQs</Typography>
           <Typography sx={{display:"block"}} variant="h7">Vikrant</Typography>
           <Typography sx={{display:"block"}} variant="h7">RTejen</Typography>
           <Typography sx={{display:"block"}} variant="h7">Terms & use</Typography>
           <Typography sx={{display:"block"}} variant="h7">Dinsjj</Typography>
           <Typography sx={{display:"block"}} variant="h7">RTejen</Typography>

          </Grid>

               <Grid item  xs={12} md={3} lg={3}>
           <Typography sx={{display:"block"}}variant='h6'>Company</Typography>
           <Typography sx={{display:"block"}}variant="h7">About Us</Typography>
           <Typography sx={{display:"block"}}variant="h7">Careers</Typography>
           <Typography sx={{display:"block"}}variant="h7">Blog</Typography>
           <Typography sx={{display:"block"}}variant="h7">Vikrant</Typography>
          </Grid>

               <Grid item  xs={12} md={3} lg={3}>
           <Typography sx={{display:"block"}} variant='h6'>Destinations</Typography>
           <Typography sx={{display:"block"}} variant="h7">Coiuntries</Typography>
           <Typography sx={{display:"block"}} variant="h7">Cities</Typography>
          </Grid>

               <Grid item  xs={12} md={3} lg={3}>
           <Typography sx={{display:"block"}} variant='h6'>Partner With Us</Typography>
           <Typography sx={{display:"block"}} variant="h7">Part Hub</Typography>
           <Typography sx={{display:"block"}} variant="h7">Affiliates</Typography>
           <Typography sx={{display:"block"}} variant="h7">Vikrant</Typography>
           <Typography sx={{display:"block"}} variant="h7">Vikrant</Typography>
          </Grid>

               <Grid item  xs={12} md={3} lg={3}>
           <Typography sx={{display:"block"}} variant='h6'>Get The App</Typography>
           <Typography sx={{display:"block"}} variant="h7">IOS</Typography>
           <Typography sx={{display:"block"}} variant="h7">ANdroid App</Typography>
           
          </Grid>
      </Grid>
    </Container>
   </Typography>
   
  )
}

export default Footer
