/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  Chip,
} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Rating from '@material-ui/lab/Rating';
import AddIcon from '@mui/icons-material/Add';

import { useStyles } from './MapStyles';

export default function MapDetails({ place, selected, refProp }) {
  if (selected) {
    refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  const classes = useStyles();

  const savePin = (placeData) => {
    const image = placeData.photo ? placeData.photo.images.large.url : 'https://images.unsplash.com/photo-1580793241553-e9f1cce181af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80';
    const data = {
      photo: image,
      name: placeData.name,
      num_reviews: placeData.num_reviews,
      cuisine: placeData.cuisine,
      address: placeData.address,
      website: placeData.website,
      ranking: placeData.ranking,
      rating: placeData.rating,
      lat: placeData.latitude,
      lng: placeData.longitude,
    };
    console.log(data);
  };

  return (
    <Card elevation={6} style={{ display: 'inline-flex' }}>
      <CardMedia
        style={{ height: '45vh', width: 200 }}
        image={
          place.photo
            ? place.photo.images.large.url
            : 'https://images.unsplash.com/photo-1580793241553-e9f1cce181af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80'
        }
        title={place.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {place.name}
        </Typography>
        <Box display="flex" justifyContent="space-between" my={2}>
          <Rating name="read-only" value={Number(place.rating)} readOnly />
          <Typography component="legend">
            {place.num_reviews} review
            {place.num_reviews > 1 && 's'}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography component="legend">Ranking</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.ranking}
          </Typography>
        </Box>
        {place?.cuisine?.map(({ name }) => (
          <Chip key={name} size="small" label={name} className={classes.chip} />
        ))}
        {place.address && (
          <Typography
            gutterBottom
            variant="body2"
            color="textSecondary"
            className={classes.subtitle}
          >
            <LocationOnIcon />
            {place.address}
          </Typography>
        )}
        <Box display="flex" flexDirection="row" justifyContent="space-evenly">
          <Button
            variant="contained"
            style={{
              backgroundColor: 'gray',
              color: 'white',
            }}
            onClick={() => window.open(place.website, '_blank')}
          >
            Website
          </Button>
          <Button
            variant="contained"
            style={{
              backgroundColor: 'green',
              color: 'white',
            }}
            onClick={() => savePin(place)}
          >
            <AddIcon />
            Add Pin
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
