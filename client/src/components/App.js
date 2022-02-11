import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import NavBar from './NavBar';
import HomePage from './HomePage';
import MyMaps from './MyMaps';
import NewMap from './NewMap';
import FavoriteMaps from './FavoriteMaps';
import Map from './Map';
import Login from './Login';
import Register from './Register';
import MapFeed from './components/MapFeed';
import RightBar from './components/RightBar';
import LeftBar from './components/LeftBar';
import useLocalStorage from '../hooks/useLocalStorage';

const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

export default function App() {
  const classes = useStyles();
  const [accessToken, setAccessToken] = useLocalStorage('accessToken', '');
  return (
    <Router>
      <NavBar accessToken={accessToken} setAccessToken={setAccessToken} />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <Leftbar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed />
        </Grid>
        <Grid item sm={3} className={classes.right}>
          <Rightbar />
        </Grid>
      </Grid>
      <Switch>
        <Route exact path="/mymaps">
          <MyMaps />
        </Route>
        <Route exact path="/favoritemaps">
          <FavoriteMaps />
        </Route>
        <Route exact path="/newmap">
          <NewMap />
        </Route>
        <Route exact path="/map">
          <Map accessToken={accessToken} />
        </Route>
        <Route exact path="/login">
          <Login setAccessToken={setAccessToken} />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/">
          <HomePage accessToken={accessToken} />
        </Route>
      </Switch>
    </Router>
  );
}
