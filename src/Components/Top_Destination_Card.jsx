import React from 'react'
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';

function Top_Destination_Card(props) {
  return (
    <Card variant="outlined" sx={{ width: 300 ,marginLeft:"25px"}}>
      <CardOverflow>
        <AspectRatio ratio="2">
          <img
            src="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318"
            srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
            loading="lazy"
            alt=""
            
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="title-md">{props.city}</Typography>
        <Typography level="body-sm">{props.accommadation}</Typography>
      </CardContent>
      
    </Card>
  )
}

export default Top_Destination_Card
