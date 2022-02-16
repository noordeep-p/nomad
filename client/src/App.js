import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './components/Content/MainPage';
import MapCard from './components/Content/MapCard';
import UserAuth from './components/Content/UserAuth';
import Chatroom from './components/Chat/Chatroom';
import MapIndex from './components/Map/MapIndex';

import useLocalStorage from './hooks/useLocalStorage';

export default function App() {
  const [accessToken, setAccessToken] = useLocalStorage('accessToken', '');

  return (
    <Router>
      <Switch>
        <Route exact path="/map">
          <MapIndex />
        </Route>
        <Route exact path="/login">
          <UserAuth accessToken={accessToken} setAccessToken={setAccessToken} />
        </Route>
        <Route exact path="/chatroom">
          <Chatroom setAccessToken={setAccessToken} />
        </Route>
        <Route exact path="/">
          <MainPage
            bucketMain={[
              <MapCard
                content={{
                  'primary-action': 'View this itinerary',
                }}
              />,
            ]}
          />
        </Route>
      </Switch>
    </Router>
  );
}
