/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import { Typography } from '@material-ui/core';
import io from 'socket.io-client';
import Convo from './Convo';

const socket = io.connect('http://localhost:4000/');

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  chatSection: {
    width: '100%',
    height: '90vh',
  },
  headBG: {
    backgroundColor: '#e0e0e0',
  },
  borderRight500: {
    borderRight: '1px solid #e0e0e0',
  },
  messageArea: {
    height: '75vh',
    overflowY: 'auto',
  },
});
const currentUser = localStorage.getItem('username');

function ChatContainer() {
  const classes = useStyles();
  const [user] = useState(currentUser);
  const [chatroom, setChatRoom] = useState('Toronto');

  return (
    <div>
      <Grid container component={Paper} className={classes.chatSection}>
        <Grid item xs={3} className={classes.borderRight500}>
          <List sx={{ borderRadius: 2 }}>
            <ListItem button key="Profile">
              <Typography align="center">
                {' '}
                Profile:
                {' '}
                {currentUser}
              </Typography>
              <ListItemText secondary="online" align="right" />
            </ListItem>
          </List>
          <Divider />
          <ListItem button key="Profile">
            <Typography align="center">Chatrooms</Typography>
          </ListItem>
          <List>
            <ListItem
              button
              key="Toronto"
              onClick={(e) => {
                setChatRoom(e.target.value);
              }}
            >
              <ListItemIcon>
                <Avatar
                  alt="Toronto"
                  src="https://images.unsplash.com/photo-1586576782138-19304c43d0e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                />
              </ListItemIcon>
              <ListItemText primary="Toronto">Toronto</ListItemText>
            </ListItem>
            <ListItem
              button
              key="Vancouver"
              onClick={(e) => {
                setChatRoom(e.target.value);
              }}
            >
              <ListItemIcon>
                <Avatar
                  alt="Vancouver"
                  src="https://images.unsplash.com/photo-1560814304-4f05b62af116?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
                />
              </ListItemIcon>
              <ListItemText primary="Vancouver">Vancouver</ListItemText>
            </ListItem>
            <ListItem
              button
              key="London"
              onClick={(e) => {
                setChatRoom(e.target.value);
              }}
            >
              <ListItemIcon>
                <Avatar
                  alt="London"
                  src="https://images.unsplash.com/photo-1494922275507-58dc039ed337?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                />
              </ListItemIcon>
              <ListItemText primary="London">London</ListItemText>
            </ListItem>
            <ListItem
              button
              key="Paris"
              onClick={(e) => {
                setChatRoom(e.target.value);
              }}
            >
              <ListItemIcon>
                <Avatar
                  alt="Paris"
                  src="https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                />
              </ListItemIcon>
              <ListItemText primary="Paris">Paris</ListItemText>
            </ListItem>
            <ListItem
              button
              key="Moscow"
              onClick={(e) => {
                setChatRoom(e.target.value);
              }}
            >
              <ListItemIcon>
                <Avatar
                  alt="Moscow"
                  src="https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                />
              </ListItemIcon>
              <ListItemText primary="Moscow">Moscow</ListItemText>
            </ListItem>
            <ListItem
              button
              key="Dubai"
              onClick={(e) => {
                setChatRoom(e.target.value);
              }}
            >
              <ListItemIcon>
                <Avatar
                  alt="Dubai"
                  src="https://images.unsplash.com/flagged/photo-1559717865-a99cac1c95d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2942&q=80"
                />
              </ListItemIcon>
              <ListItemText primary="Dubai">Dubai</ListItemText>
            </ListItem>
            <ListItem
              button
              key="NewYork"
              onClick={(e) => {
                setChatRoom(e.target.value);
              }}
            >
              <ListItemIcon>
                <Avatar
                  alt="New York"
                  src="https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                />
              </ListItemIcon>
              <ListItemText primary="New York">New York</ListItemText>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={9}>
          <List>
            <Convo socket={socket} user={user} chatroom={chatroom} />
          </List>
        </Grid>
      </Grid>
    </div>
  );
}

export default ChatContainer;
