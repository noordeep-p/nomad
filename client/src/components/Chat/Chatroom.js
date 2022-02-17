/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import io from 'socket.io-client';

import Convo from './Convo';

const socket = io.connect('http://localhost:4000/');

export default function Chatroom() {
  const [user, setUser] = useState('');
  const [chatroom, setChatRoom] = useState('');
  const [showChatRoom, setshowChatRoom] = useState(false);

  const openChat = () => {
    if (user && chatroom) {
      socket.emit('join_chat', chatroom);
      setshowChatRoom(true);
    }
  };
  return (
    <div>
      {!showChatRoom ? (
        <Card sx={{ width: '25%', height: '30vh' }}>
          <CardContent>
            <Typography variant="h4" component="div">
              Start a Chat
            </Typography>
            <Typography variant="h3">
              <input type="text" placeholder="Enter Your Name" onChange={(event) => { setUser(event.target.value); }} />
              <br />
              <input type="text" placeholder="Enter Room ID" onChange={(event) => { setChatRoom(event.target.value); }} />
            </Typography>
          </CardContent>
          <CardActions>
            <button variant="contained" onClick={openChat}>Start Chat</button>
          </CardActions>
        </Card>
      ) : (
        <Convo socket={socket} user={user} chatroom={chatroom} />
      )}
    </div>
  );
}
