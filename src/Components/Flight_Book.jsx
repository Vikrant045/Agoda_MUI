import React from 'react'
import { Box, Typography, TextField, Container, Button } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
const Flight_Book = () => {
  return (
    <Box mt={5}  >
    <Container maxWidth="lg" sx={{backgroundColor:"grey.100", padding:"25px" ,borderRadius:"8px" ,boxShadow: '1px 1px 3px grey',}}>
        <Typography variant='h4'>
            Book Your Dream Destination :
        </Typography>
        <TextField
            id="outlined-basic"
            label="Destination"
            variant="outlined"
            type='text'
            //   startIcon={<SearchIcon />}
            fullWidth
            InputProps={{
                startAdornment: (
                    <SearchIcon sx={{ mr: 1, color: 'action.active' }} />
                ),
            }}
            placeholder='Enter A Destination or Property'
            sx={{ m: 1 ,backgroundColor:"white"}} />

        <Typography component="div" sx={{ display: "flex", justifyContent: "space-between" }}>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker label="Select date from"
                    sx={{ width: "450px ", m: 1 ,backgroundColor:"white"}}
                   
                />
                <DatePicker label="Select date To"
                    sx={{ width: "450px ", m: 1 ,backgroundColor:"white"}}
                />

            </LocalizationProvider>

            <Select
      placeholder="Select no of rooms…"
      indicator={<KeyboardArrowDown />}
      variant="outlined"
      id="outlined-basic"
      sx={{
        width: "450px",m:1,backgroundColor:"white",
        [`& .${selectClasses.indicator}`]: {
          transition: '0.2s',
          [`&.${selectClasses.expanded}`]: {
            transform: 'rotate(-180deg)',
          },
        },
      }}
    >
      <Option value="dog">1</Option>
      <Option value="cat">2</Option>
      <Option value="fish">3</Option>
      <Option value="bird">4</Option>
    </Select>


        </Typography>
       
        <Button variant="contained"       sx={{ m: 2, width: '200px', height: '50px', marginLeft:"40%" }}
>
            Search
        </Button>

    </Container>

</Box>
  )
}

export default Flight_Book
