/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import { Typography, TextField } from '@material-ui/core';
import io from 'socket.io-client';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';

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
const currentUserID = localStorage.getItem('userID');

function ChatContainer() {
  const classes = useStyles();
  const [user] = useState(currentUser);
  const [chatroom, setChatRoom] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/chatroom')
      .then((res) => {
        if (res) {
          setChatRoom(res.data);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, [currentUser]);

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
            {chatroom.map((chat) => (
              <ListItem
                button
                key={chat.name}
                onClick={(e) => {
                  setChatRoom(e.target.value);
                }}
              >
                <ListItemIcon>
                  <Avatar alt={chat.name} src={chat.photo} />
                </ListItemIcon>
                <ListItemText primary={chat.name}>{chat.name}</ListItemText>
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={9}>
          <List className={classes.messageArea}>
            <ListItem key="1">
              <Grid container>
                <Grid item xs={12}>
                  <ListItemText align="right" primary="Hey man, What's up ?" />
                </Grid>
                <Grid item xs={12}>
                  <ListItemText align="right" secondary="09:30" />
                </Grid>
              </Grid>
            </ListItem>
          </List>
          <Divider />
          <Grid container style={{ padding: '20px' }}>
            <Grid item xs={11}>
              <TextField
                id="outlined-basic-email"
                label="Type Something"
                fullWidth
              />
            </Grid>
            <Grid xs={1} align="right">
              <Fab color="primary" aria-label="add">
                <SendIcon />
              </Fab>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default ChatContainer;
