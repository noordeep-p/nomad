import * as React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// import mapsample from '../Images/mapsample.png';

export default function PointDetails({ point }) {
  return (
    <Card
      sx={{
        maxWidth: 500,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <CardMedia
        component="img"
        alt="map1"
        height="300"
        image={point.image_url}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {point.address}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {point.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

PointDetails.propTypes = { point: PropTypes.string.isRequired };
