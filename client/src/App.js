import React from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { UserContext } from './userContext';
import { MapContext } from './mapContext';
import MainPage from './components/Content/MainPage';
import UserAuth from './components/Content/UserAuth';
import MapIndex from './components/Map/MapIndex';
import MapView from './components/Map/MapView';

import useLocalStorage from './hooks/useLocalStorage';

axios.defaults.headers.authorization = localStorage.getItem('accessToken');

export default function App() {
  const [accessToken, setAccessToken] = useLocalStorage('accessToken', null);
  const currentUser = localStorage.getItem('username');

  return (
    <UserContext>
      <MapContext>
        <Router>
          <Switch>
            <Route exact path="/login">
              <UserAuth setAccessToken={setAccessToken} />
            </Route>
            <Route exact path="/">
              {accessToken ? (
                <MainPage
                  setAccessToken={setAccessToken}
                  currentUser={currentUser}
                />
              ) : (
                <Redirect to="/login" />
              )}
            </Route>
            <Route exact path="/map/:mapId">
              {accessToken ? (
                <MapIndex currentUser={currentUser} />
              ) : (
                <Redirect to="/login" />
              )}
            </Route>
            <Route exact path="/mapview/:mapId">
              {accessToken ? <MapView /> : <Redirect to="/login" />}
            </Route>
          </Switch>
        </Router>
      </MapContext>
    </UserContext>
  );
}
