import React, { useState, useEffect } from 'react';
import { Box, Grid } from '@material-ui/core';

import getPlacesData from '../../helpers/rapidAPI';

import MapFilters from './MapFilters';
import MapBox from './MapBox';
import MapList from './MapList';

export default function MapIndex() {
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
      <Box mt={8}>
        <Grid container spacing={3} style={{ width: '100%', mt: '50px' }}>
          <Grid item xs={12} md={4}>
            <MapList
              isLoading={isLoading}
              childClicked={childClicked}
              places={filteredPlaces.length ? filteredPlaces : places}
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
      </Box>
    </>
  );
}
