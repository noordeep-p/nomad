import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CssBaseline, Grid } from '@mui/material/';
import GoogleMapReact from 'google-map-react';

import PointDetails from './PointDetails';

export default function Map() {
  const coords = { lat: 0, lng: 0 };

  const [points, setPoints] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/points').then((data) => {
      setPoints(data.data);
    });
  }, []);
  const renderPoint = () => {
    return (
      points &&
      points.map((point) => {
        return (
          <Grid item xs={12} md={3}>
            <PointDetails point={point} />
          </Grid>
        );
      })
    );
  };
  return (
    <div className="mapContainer">
      <CssBaseline>
        <Grid container spacing={1} style={{ width: '100%' }}>
          <PointDetails />
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
