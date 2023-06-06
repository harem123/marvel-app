import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


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

export default function MaterialCard(props) {
  const { details } = props;
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 360 }}>
      <CardHeader
        title= {details.title}
        subheader= {details.dates[0].date}
      />
      <CardMedia
        component="img"
        height="194"
        image={`${details.thumbnail.path}.${details.thumbnail.extension}`}
        alt="Comic Image"
        style={{ objectFit: 'contain' }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Serie: {details.series.name}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <Typography variant="body2" color="text.secondary">
          Creators
        </Typography>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          
          <Typography paragraph>
            List of creators:
          </Typography>
          <Typography paragraph>
          {details.creators.items.map((creator)=> (
             <div style={{ width: '100%' }}>
             <Box
               component="div"
               sx={{
                 display: 'inline',
                 p: 1,
                 m: 1,
                 
                
               }}
             >
             
         {creator.name}
        
             </Box>
             <Box
               component="div"
               sx={{
                 display: 'inline',
                 p: 1,
                 m: 1,}}
             >
               
          {creator.role}
        
             </Box>
           </div>       
        ))}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}