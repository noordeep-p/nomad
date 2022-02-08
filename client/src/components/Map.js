import React from 'react';
import {
  // Paper,
  // Typography,
  // useMediaQuery,
  CssBaseline,
  Grid,
} from '@mui/material/';
import GoogleMapReact from 'google-map-react';

import MapDetails from './MapDetails';

export default function Map() {
  const coords = { lat: 0, lng: 0 };
  return (
    <div className="mapContainer">
      <CssBaseline>
        <Grid container spacing={1} style={{ width: '100%' }}>
          <Grid item xs={12} md={3}>
            <MapDetails />
          </Grid>
          <Grid
            item
            xs={12}
            md={9}
            style={{
              display: 'flex',
              height: '100vh',
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
