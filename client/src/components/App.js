import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import HomePage from './HomePage';
import MyMaps from './MyMaps';
import NewMap from './NewMap';
import FavoriteMaps from './FavoriteMaps';
import Map from './Map';
import Login from './Login';
import Register from './Register';
import useLocalStorage from '../hooks/useLocalStorage';

export default function App() {
  const [accessToken, setAccessToken] = useLocalStorage('accessToken', '');
  return (
    <Router>
      <NavBar accessToken={accessToken} setAccessToken={setAccessToken} />
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
          <Map />
        </Route>
        <Route exact path="/login">
          <Login setAccessToken={setAccessToken} />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}
