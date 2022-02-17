import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import InputBase from '@material-ui/core/InputBase';
import ModeOfTravelIcon from '@mui/icons-material/ModeOfTravel';
import SearchIcon from '@material-ui/icons/Search';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Typography } from '@material-ui/core';

import useStyles from '../Content/StylesMain';

export default function MapFilters({
  type,
  setType,
  rating,
  setRating,
  onPlaceChanged,
  onLoad,
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
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
          <Link
            href="/"
            variant="h5"
            color="inherit"
            underline="none"
            className={classes.linkBrandSmall}
          >
            <ModeOfTravelIcon />
            {' '}
            Nomad
          </Link>
          <Typography variant="body1">Search Filters :</Typography>
          <div>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="type">Type</InputLabel>
              <Select
                id="type"
                value={type}
                onChange={(event) => setType(event.target.value)}
              >
                <MenuItem value="restaurants">Restaurants</MenuItem>
                <MenuItem value="hotels">Hotels</MenuItem>
                <MenuItem value="attractions">Attractions</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="rating">Rating</InputLabel>
              <Select
                id="rating"
                value={rating}
                onChange={(event) => setRating(event.target.value)}
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="3">3+ Stars</MenuItem>
                <MenuItem value="4">4+ Stars</MenuItem>
                <MenuItem value="4.5">5 Stars</MenuItem>
              </Select>
            </FormControl>
          </div>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{ root: classes.inputRoot, input: classes.inputInput }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
          </Autocomplete>
        </Toolbar>
      </AppBar>
    </div>
  );
}
