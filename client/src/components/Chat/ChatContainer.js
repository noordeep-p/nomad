/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect, useRef } from 'react';
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
import { Typography, TextField, Button } from '@material-ui/core';
import ScrollToBottom from 'react-scroll-to-bottom';
import { css } from 'glamor';

import useStyles from './chatStyles';

const currentUser = localStorage.getItem('username');
const currentUserID = localStorage.getItem('userID');

function ChatContainer() {
  // all chat styling
  const classes = useStyles();
  const ROOT_CSS = css({
    height: '70vh',
    width: '100%',
  });

  // all chatrooms hooks
  const [user] = useState(currentUser);
  const [chatrooms, setChatRoom] = useState([]);
  const [currentRoomID, setCurrentRoomID] = useState('');

  // all message box hooks
  const [messagesHistory, setMessagesHistory] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');

  // all messages helper functions
  const handleSendMessage = () => {
    if (currentMessage) {
      const messageInput = {
        chatroomId: currentRoomID,
        sender: user,
        text: currentMessage,
      };
      axios
        .post('http://localhost:8000/message', messageInput)
        .then((res) => {
          if (res) {
            setMessagesHistory((message) => [...message, messageInput]);
            setCurrentMessage('');
          }
        })
        .catch((e) => console.error(e));
    }
  };

  // all db calls for chatrooms
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

  // all db calls for messages
  useEffect(() => {
    axios
      .get(`http://localhost:8000/message/${currentRoomID}`)
      .then((res) => {
        if (res) {
          setMessagesHistory(res.data);
        }
      })
      .catch((e) => console.error(e));
  }, [currentRoomID]);

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
            {chatrooms.map((chat) => (
              <ListItem button key={chat._id}>
                <ListItemIcon>
                  <Avatar alt={chat.name} src={chat.photo} />
                </ListItemIcon>
                <ListItemText
                  data-chat_id={chat._id}
                  primary={chat.name}
                  onClick={(e) => {
                    setCurrentRoomID(e.currentTarget.dataset.chat_id);
                  }}
                >
                  {chat.name}
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={9}>
          <List className={classes.messageArea}>
            <ScrollToBottom className={ROOT_CSS}>
              <div style={{ height: 300, width: '100%' }}>
                <List className="classes.messageBox">
                  {messagesHistory.map((msg) => (
                    <ListItem key={msg._id}>
                      <Grid container>
                        <Grid item xs={12}>
                          <ListItemText align="right" primary={msg.text} />
                        </Grid>
                        <Grid item xs={12}>
                          <ListItemText align="right" secondary={msg.sender} />
                          <ListItemText
                            align="right"
                            secondary={msg.timestamp}
                          />
                        </Grid>
                      </Grid>
                    </ListItem>
                  ))}
                </List>
              </div>
            </ScrollToBottom>
          </List>
          <Divider />
          <Grid container style={{ padding: '20px' }}>
            <Grid item xs={11}>
              <TextField
                id="outlined-basic-email"
                label="Type Something"
                value={currentMessage}
                onChange={(event) => {
                  setCurrentMessage(event.target.value);
                }}
                onKeyPress={(event) => event.key === 'Enter' && handleSendMessage()}
                fullWidth
              />
            </Grid>
            <Grid xs={1} align="right">
              <Button
                size="large"
                style={{ width: '60%' }}
                variant="contained"
                onClick={handleSendMessage}
              >
                Send
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default ChatContainer;
