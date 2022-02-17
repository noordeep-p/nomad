import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import MainPage from './components/Content/MainPage';
import MapCard from './components/Content/MapCard';
import UserAuth from './components/Content/UserAuth';
import Chatroom from './components/Chat/Chatroom';
import MapIndex from './components/Map/MapIndex';

import useLocalStorage from './hooks/useLocalStorage';

export default function App() {
  const [accessToken, setAccessToken] = useLocalStorage('accessToken', null);

  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <UserAuth setAccessToken={setAccessToken} />
        </Route>
        <Route exact path="/">
          {accessToken ? (
            <MainPage
              setAccessToken={setAccessToken}
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
          {accessToken ? <MapIndex /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/chatroom">
          {accessToken ? (
            <Chatroom setAccessToken={setAccessToken} />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
      </Switch>
    </Router>
  );
}
