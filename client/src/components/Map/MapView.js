/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Box,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Link,
  Toolbar,
  Paper,
  useMediaQuery,
  AppBar,
} from '@material-ui/core';
import ModeOfTravelIcon from '@mui/icons-material/ModeOfTravel';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Rating from '@material-ui/lab/Rating';
import GoogleMapReact from 'google-map-react';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import { useStyles } from './MapStyles';

export default function MapView() {
  const urlParams = window.location.pathname.slice(9);
  const [savedPins, setSavedPins] = useState([]);
  const [coords, setCoords] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:8000/maps/${urlParams}`).then((res) => {
      setCoords({
        lat: Number(res.data[0].points[0].latitude),
        lng: Number(res.data[0].points[0].longitude),
      });
      setSavedPins(res.data[0].points);
    });
  }, []);

  const matches = useMediaQuery('(min-width:600px)');
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar
            style={{
              color: 'white',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}
          >
            <Link
              href="/"
              variant="h5"
              color="inherit"
              underline="none"
              className={classes.linkBrand}
            >
              <ModeOfTravelIcon />
              {' '}
              Nomad
            </Link>
          </Toolbar>
        </AppBar>
      </div>
      <Box mt={8}>
        <div className={classes.mapContainer}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
            defaultCenter={coords}
            center={coords}
            defaultZoom={14}
            margin={[50, 50, 50, 50]}
          >
            {savedPins.length
              && savedPins.map((place, i) => (
                <div
                  className={classes.markerContainer}
                  lat={Number(place.latitude)}
                  lng={Number(place.longitude)}
                  key={i}
                >
                  {!matches ? (
                    <LocationOnOutlinedIcon color="primary" fontSize="large" />
                  ) : (
                    <Paper elevation={3} className={classes.paper}>
                      <Typography
                        className={classes.typography}
                        variant="caption"
                        gutterBottom
                      >
                        {' '}
                        {place.name}
                      </Typography>
                      <img
                        className={classes.pointer}
                        src={
                          place.photo
                            ? place.photo
                            : 'https://images.unsplash.com/photo-1580793241553-e9f1cce181af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80'
                        }
                      />
                    </Paper>
                  )}
                </div>
              ))}
          </GoogleMapReact>
        </div>
      </Box>
      <Box m={6}>
        <Grid container style={{ width: '100%' }}>
          <Grid item md={12}>
            <Typography variant="h6">
              Places Added to your Shared Itinerary:
            </Typography>
            {savedPins.map((place) => (
              <Card
                elevation={6}
                style={{
                  display: 'inline-flex',
                  maxWidth: '28vw',
                  maxHeight: 'fit-content',
                  margin: '1vw',
                }}
              >
                <CardMedia
                  style={{ height: 'inherit', minWidth: '10vw' }}
                  image={place.photo}
                  title={place.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6">
                    {place.name}
                  </Typography>
                  <Box display="flex" justifyContent="space-between" my={2}>
                    <Rating
                      name="read-only"
                      value={Number(place.rating)}
                      readOnly
                    />
                    <Typography component="legend">
                      {place.num_reviews}
                      {' '}
                      review
                      {place.num_reviews > 1 && 's'}
                    </Typography>
                  </Box>
                  <Box display="flex" justifyContent="space-between">
                    <Typography component="legend">Ranking</Typography>
                    <Typography gutterBottom variant="caption">
                      {place.ranking}
                    </Typography>
                  </Box>
                  {place?.cuisine?.map(({ name }) => (
                    <Chip
                      key={name}
                      size="small"
                      label={name}
                      className={classes.chip}
                    />
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
                </CardContent>
              </Card>
            ))}
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
