import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import { Box } from '@mui/material';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function DashBoard_Card(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 250,minWidth: 230, marginLeft: "12px" ,maxHeight:"170px",boxShadow:"2px 2px 10px  grey", borderRadius:"10px"}}>

      <CardHeader
        title={props.title}
        avatar={
   <Avatar sx={{ bgcolor: props.avatarColor, marginRight: "6px", width:"35px",height:"35px"}} aria-label="recipe">
            {props.avatarIcon}
          </Avatar>
        }
      />
      <Typography  color="Black" component="span" sx={{ fontWeight: "bold", marginLeft: "20px" }}>
        {props.amount}
      </Typography>

      <Typography component="div" sx={{marginTop:"0px",}}>
           
      <CardActions disableSpacing  sx={{marginTop:"0px",border:""}}>

{
      props.slider=="s" ?  <><Box sx={{ width: 200 }}>

      <Slider  defaultValue={30}  color="secondary"
      sx={{ '& .MuiSlider-thumb': { display: 'none' } }}
      aria-label="Default" />
    </Box> </> :  <>
       <IconButton aria-label="add to favorites" >
       {props.actionIcon}
     </IconButton>
     <Typography>  
       <Typography component="span" sx={{color:props.color,width:"20px"}}>
         {props.changePercentage}
       </Typography>
       <Typography component="span" sx={{fontSize:"13px",marginLeft:"5px"}}>
       {props.changeDescription}
      
       </Typography>
       </Typography> </>
    }
</CardActions>
      </Typography>
    </Card>
  );
}
