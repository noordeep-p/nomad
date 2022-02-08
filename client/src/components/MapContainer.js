import * as React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import mapsample from '../Images/mapsample.png';

export default function MapContainer() {
  return (
    <Card
      sx={{
        maxWidth: 345,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <CardMedia component="img" alt="map1" height="140" image={mapsample} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Map 1
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Map description
        </Typography>
      </CardContent>
      <CardActions>
        <Link to="/map">View</Link>
        <IconButton size="small">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
