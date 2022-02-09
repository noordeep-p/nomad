import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CssBaseline, Grid } from '@mui/material/';
import GoogleMapReact from 'google-map-react';

import PointDetails from './PointDetails';

export default function Map() {
  const coords = { lat: 0, lng: 0 };

  const [points, setPoints] = useState([]);
  console.log(points);

  useEffect(() => {
    axios.get('http://localhost:8000/points').then((data) => {
      setPoints(data.data);
    });
  }, []);
  const renderPoint = () => points.map((point) => (
    <Grid item xs={12} md={12}>
      <PointDetails point={point} />
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
            md={12}
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
              defaultZoom={14}
              margin={[50, 50, 50, 50]}
              options={{
                disableDefaultUI: true,
                zoomControl: true,
              }}
            />
          </Grid>
        </Grid>
      </div>
    </CssBaseline>
  );
}
