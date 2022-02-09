/* eslint-disable react/destructuring-assignment */
// /* eslint-disable react/prop-types */
import * as React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function PointDetails({ image, address, description }) {
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
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {address}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

PointDetails.propTypes = {
  image: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
