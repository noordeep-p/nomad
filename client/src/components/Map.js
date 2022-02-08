/* eslint-disable no-unused-vars */
import React from 'react';
import {
  Paper,
  Typography,
  useMediaQuery,
  CssBaseline,
  Grid,
} from '@material-ui/core';
import GoogleMapReact from 'google-map-react';

import MapDetails from './MapDetails';

export default function Map() {
  const coords = { lat: 0, lng: 0 };
  return (
    <div className="mapContainer">
      <CssBaseline>
        <Grid container spacing={3} style={{ width: '100%' }}>
          <Grid item xs={12} md={4}>
            <MapDetails />
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
            <GoogleMapReact
              bootstrapURLKeys={{
                key: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
              }}
              defaultCenter={coords}
              center={coords}
              defaultZoom={14}
              margin={[50, 50, 50, 50]}
              options={{
                disableDefaultUI: true,
                zoomControl: true,
              }}
              // onChange={''}
              // onChildClick={''}
            />
          </Grid>
        </Grid>
      </CssBaseline>
    </div>
  );
}
