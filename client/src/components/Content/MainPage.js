/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import InputBase from '@material-ui/core/InputBase';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import ModeOfTravelIcon from '@mui/icons-material/ModeOfTravel';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import LogoutIcon from '@mui/icons-material/Logout';
import ChatIcon from '@mui/icons-material/Chat';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import NewMapModal from './NewMapModal';
import ChatContainer from '../Chat/ChatContainer';
import MapCard from './MapCard';

import useStyles from './StylesMain';

export default function MainPage({ setAccessToken }) {
  const classes = useStyles();
  const [mode, setMode] = useState('map');
  const content = {
    link1: 'Your Maps',
    link2: 'Explore',
    link3: 'Chats',
    link4: 'Logout',
  };

  const currentUserID = localStorage.getItem('userId');
  const [maps, setMaps] = useState({
    allMaps: [],
    userMaps: [],
  });

  useEffect(() => {
    Promise.all([
      axios.get('http://localhost:8000/maps'),
      axios.get(`http://localhost:8000/maps/user/${currentUserID}`),
    ]).then((all) => {
      setMaps((prev) => ({
        ...prev,
        allMaps: all[0].data,
        userMaps: all[1].data,
      }));
    });
  }, [mode]);

  const [state, setState] = React.useState({ open: false });

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown'
      && (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, open });
  };

  const visualMode = (type) => {
    setMode(type);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
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
          <NewMapModal />
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
        </Toolbar>
      </AppBar>
      <Drawer className={classes.drawer} variant="permanent">
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem
              button
              key={content.link1}
              onClick={() => {
                visualMode('map');
              }}
            >
              <ListItemIcon>
                <LocationOnIcon />
              </ListItemIcon>
              <ListItemText primary={content.link1} />
            </ListItem>
            <ListItem
              button
              key={content.link2}
              onClick={() => {
                visualMode('allMap');
              }}
            >
              <ListItemIcon>
                <TravelExploreIcon />
              </ListItemIcon>
              <ListItemText primary={content.link2} />
            </ListItem>
            <ListItem
              button
              key={content.link3}
              onClick={() => {
                visualMode('chat');
              }}
            >
              <ListItemIcon>
                <ChatIcon />
              </ListItemIcon>
              <ListItemText primary={content.link3} />
            </ListItem>
            <ListItem
              button
              key={content.link4}
              onClick={() => {
                setAccessToken(null);
                localStorage.clear();
              }}
            >
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary={content.link4} />
            </ListItem>
          </List>
        </div>
      </Drawer>
      <Drawer anchor="left" open={state.open} onClose={toggleDrawer(false)}>
        <div className={classes.drawerContainer}>
          <List>
            <ListItem
              button
              key={content.link1}
              onClick={() => {
                visualMode('map');
              }}
            >
              <ListItemIcon>
                <LocationOnIcon />
              </ListItemIcon>
              <ListItemText primary={content.link1} />
            </ListItem>
            <ListItem
              button
              key={content.link2}
              onClick={() => {
                visualMode('allMap');
              }}
            >
              <ListItemIcon>
                <TravelExploreIcon />
              </ListItemIcon>
              <ListItemText primary={content.link2} />
            </ListItem>
            <ListItem
              button
              key={content.link3}
              onClick={() => {
                visualMode('chat');
              }}
            >
              <ListItemIcon>
                <ChatIcon />
              </ListItemIcon>
              <ListItemText primary={content.link3} />
            </ListItem>
            <ListItem
              button
              key={content.link4}
              onClick={() => {
                setAccessToken(null);
                localStorage.clear();
              }}
            >
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary={content.link4} />
            </ListItem>
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <div>
          {mode === 'allMap' && (
            <MapCard
              cards={maps.allMaps.filter((map) => map.owner !== currentUserID)}
            />
          )}
          {mode === 'map' && <MapCard cards={maps.userMaps} />}
          {mode === 'chat' && <ChatContainer />}
        </div>
      </main>
    </div>
  );
}
