/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable array-callback-return */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  CssBaseline, Grid,
} from '@mui/material/';
import GoogleMapReact from 'google-map-react';

import PointDetails from './PointDetails';
import Marker from './Marker';

export default function Map({ accessToken }) {
  const [points, setPoints] = useState([]);
  const [coords, setCoords] = useState({});

  useEffect(() => {
    const data = async () => {
      const response = await axios.get('http://localhost:8000/points', { headers: accessToken });
      console.log('test=========', response.data);
      setPoints(response.data);
    };
    data().catch(console.error);
  }, []);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoords({ lat: latitude, lng: longitude });
    });
  }, []);

  const renderPoint = () => points.map((point) => (
    <Grid item xs={12} md={12}>
      <PointDetails
        key={point._id}
        image={point.image_url}
        address={point.address}
        description={point.description}
      />
    </Grid>
  ));

  return (
    <CssBaseline>
      <div className="pointContainer">
        <Grid container spacing={1} style={{ width: '100%' }}>
          <div className="pointRatio">{renderPoint()}</div>
          <Grid
            item
            xs={12}
            md={9}
            style={{
              display: 'flex',
              flex: '1 1 70%',
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
              defaultZoom={4}
              margin={[50, 50, 50, 50]}
              options={{
                disableDefaultUI: true,
                zoomControl: true,
              }}
              onChange={(e) => {
                setCoords({ lat: e.center.lat, lng: e.center.lng });
              }}
            >
              {points && points.map((point) => (
                <Marker
                  lat={point.lat}
                  lng={point.lon}
                />
              ))}
            </GoogleMapReact>
          </Grid>
        </Grid>
      </div>
    </CssBaseline>
  );
}
