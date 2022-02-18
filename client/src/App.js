import React from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import MainPage from './components/Content/MainPage';
import MapCard from './components/Content/MapCard';
import UserAuth from './components/Content/UserAuth';
import MapIndex from './components/Map/MapIndex';

import useLocalStorage from './hooks/useLocalStorage';
import { UserContext } from './userContext';

axios.defaults.headers.authorization = localStorage.getItem('accessToken');

export default function App() {
  const [accessToken, setAccessToken] = useLocalStorage('accessToken', null);
  const currentUser = localStorage.getItem('username');

  return (
    <UserContext>
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
                bucketMain={[
                  <MapCard
                    content={{
                      'primary-action': 'View this itinerary',
                    }}
                  />,
                ]}
              />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
          <Route exact path="/map">
            {accessToken ? (
              <MapIndex currentUser={currentUser} />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
        </Switch>
      </Router>
    </UserContext>
  );
}
