import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import mapsample from '../Images/mapsample.png';

export default function MapDetails() {
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
          Place
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Place description
        </Typography>
      </CardContent>
    </Card>
  );
}
