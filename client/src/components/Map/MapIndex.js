import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import {
  Box,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Button,
} from '@material-ui/core';

import LocationOnIcon from '@material-ui/icons/LocationOn';
import Rating from '@material-ui/lab/Rating';

import getPlacesData from '../../helpers/rapidAPI';

import MapFilters from './MapFilters';
import MapBox from './MapBox';
import MapList from './MapList';

import { useStyles } from './MapStyles';

const urlParams = window.location.pathname.slice(5);

export default function MapIndex() {
  const history = useHistory();

  const classes = useStyles();

  // All Maps hooks //

  // google maps hooks
  const [coords, setCoords] = useState({});
  const [bounds, setBounds] = useState(null);
  // google autocomplete hooks
  const [autocomplete, setAutocomplete] = useState(null);
  const [childClicked, setChildClicked] = useState(null);
  // view management
  const [isLoading, setIsLoading] = useState(false);
  // map places data
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [places, setPlaces] = useState([]);
  // map search types
  const [type, setType] = useState('attractions');
  const [rating, setRating] = useState('');
  // added pins
  const [savedPins, setSavedPins] = useState([]);

  // Add useEffect hooks to manage all side effects //

  // recenter maps on user location at load
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoords({ lat: latitude, lng: longitude });
      },
    );
  }, []);
  // filter places by given data
  useEffect(() => {
    const filtered = places.filter((place) => Number(place.rating) > rating);
    setFilteredPlaces(filtered);
  }, [rating]);
  // manage loading effects with map list
  // set initial state of map and update with user interactions
  useEffect(() => {
    if (bounds) {
      setIsLoading(true);
      getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
        setPlaces(data.filter((place) => place.name && place.num_reviews > 0));
        setFilteredPlaces([]);
        setRating('');
        setIsLoading(false);
      });
    }
  }, [bounds, type]);
  // enable autocomplete on load
  const onLoad = (data) => setAutocomplete(data);
  // get new lat/ long data as map view box changes
  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();
    setCoords({ lat, lng });
  };

  const handleMapSubmit = () => {
    axios
      .patch(`http://localhost:8000/maps/${urlParams}`, { savedPins })
      .then((res) => {
        if (res) {
          console.log(res.data);
          history.push('/');
        }
      })
      .catch((e) => console.error(e));
  };

  return (
    <>
      <MapFilters
        type={type}
        setType={setType}
        rating={rating}
        setRating={setRating}
        onLoad={onLoad}
        onPlaceChanged={onPlaceChanged}
      />
      <Box
        mt={10}
        display="inline"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h5">Ready to share your adventures?</Typography>
        <Button
          variant="contained"
          size="large"
          color="primary"
          style={{
            margin: '2em',
          }}
          onClick={handleMapSubmit}
        >
          Upload Itinerary
        </Button>
      </Box>
      <Box mt={4}>
        <Grid container spacing={2} style={{ width: '100%', mt: '50px' }}>
          <Grid item xs={12} md={4}>
            <MapList
              isLoading={isLoading}
              childClicked={childClicked}
              places={filteredPlaces.length ? filteredPlaces : places}
              setSavedPins={setSavedPins}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={8}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <MapBox
              setChildClicked={setChildClicked}
              setBounds={setBounds}
              setCoords={setCoords}
              coords={coords}
              places={filteredPlaces.length ? filteredPlaces : places}
              onLoad={onLoad}
              onPlaceChanged={onPlaceChanged}
            />
          </Grid>
        </Grid>
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
      </Box>
    </>
  );
}
