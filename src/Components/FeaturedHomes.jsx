import React from 'react'
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import { Container, Typography } from '@mui/material';
import HomeCard from './HomeCard';
function FeaturedHomes() {
   
  const data = [
    {
      img: "https://source.unsplash.com/random/1",
      property: "Villa",
      location: "India",
      price: "$500"
    },
    {
      img: "https://source.unsplash.com/random/2",
      property: "Apartment",
      location: "India",
      price: "$300"
    },
    {
      img: "https://source.unsplash.com/random/3",
      property: "House",
      location: "India",
      price: "$700"
    },
    {
      img: "https://source.unsplash.com/random/4",
      property: "Bungalow",
      location: "India",
      price: "$1000"
    },
    {
      img: "https://source.unsplash.com/random/5",
      property: "Cottage",
      location: "India",
      price: "$400"
    },
    {
      img: "https://source.unsplash.com/random/6",
      property: "Farmhouse",
      location: "India",
      price: "$800"
    },
    {
      img: "https://source.unsplash.com/random/7",
      property: "Penthouse",
      location: "India",
      price: "$1200"
    },
    {
      img: "https://source.unsplash.com/random/8",
      property: "Studio",
      location: "India",
      price: "$200"
    },
    {
      img: "https://source.unsplash.com/random/9",
      property: "Condo",
      location: "India",
      price: "$600"
    },
    {
      img: "https://source.unsplash.com/random/10",
      property: "Townhouse",
      location: "India",
      price: "$900"
    }
  ];
  


  return (
    <Tabs aria-label="Basic tabs" defaultValue={0}>

      <Typography component="div" sx={{display:"flex",justifyContent:"center"}}>
      <TabList>
      <Tab>New Delhi & NCR</Tab>
      <Tab>Mumbai</Tab>
      <Tab>Banglore</Tab>
    </TabList>
      </Typography>
    
    <TabPanel value={0}>
        <Container maxWidth="lg">
        <Typography sx={{fontSize:"25px"}}>Delhi NCR</Typography>
        <Typography component="div" sx={{display:"flex" ,flexWrap: "wrap"  }}>
          {
             data.map((place,idx)=>{
          return (
            <HomeCard key={idx} {...place}/>
          )
        })
      }
        </Typography>
        </Container>
       
       
      
   
      
      
    </TabPanel>
    <TabPanel value={1}>
    <Container maxWidth="lg">
       <Typography sx={{fontSize:"25px"}}>Mumbai</Typography>

        <Typography component="div" sx={{display:"flex" ,flexWrap: "wrap"  ,width:"100%"}}>
          {
             data.map((place,idx)=>{
          return (
            <HomeCard key={idx} {...place}/>
          )
        })
      }
        </Typography>
        </Container>
    </TabPanel>
    <TabPanel value={2}>
    <Container maxWidth="lg">
    <Typography sx={{fontSize:"25px"}}>Banglore</Typography>
        <Typography component="div" sx={{display:"flex" ,flexWrap: "wrap"  ,width:"100%"}}>
          {
             data.map((place,idx)=>{
          return (
            <HomeCard key={idx} {...place}/>
          )
        })
      }
        </Typography>
        </Container>
    </TabPanel>
  </Tabs>
  )
}

export default FeaturedHomes
