/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect, createRef } from 'react';
import { CircularProgress, Grid, Typography } from '@material-ui/core';

import PlaceDetails from './MapDetails';
import { useStyles } from './MapStyles';

export default function MapList({ places, childClicked, isLoading }) {
  const [elementRefs, setElementRefs] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    setElementRefs((refs) => Array(places.length)
      .fill()
      .map((_, i) => refs[i] || createRef()));
  }, [places]);

  return (
    <div className={classes.container}>
      <Typography variant="h5">
        Click Add Pin To Add to Shared Itinerary
      </Typography>
      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size="5rem" />
        </div>
      ) : (
        <Grid container spacing={3} className={classes.list}>
          {places?.map((place, i) => (
            <Grid ref={elementRefs[i]} key={i} item xs={12}>
              <PlaceDetails
                selected={Number(childClicked) === i}
                refProp={elementRefs[i]}
                place={place}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
}
