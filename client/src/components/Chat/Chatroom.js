/* eslint-disable react/button-has-type */
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function Chatroom() {
  return (
    <div>
      <Card sx={{ width: '25%', height: '30vh' }}>
        <CardContent>
          <Typography variant="h4" component="div">
            Start a Chat
          </Typography>
          <Typography variant="h3">
            <input type="text" placeholder="Enter Your Name" />
            <br />
            <input type="text" placeholder="Enter Room ID" />
          </Typography>
        </CardContent>
        <CardActions>
          <button variant="contained">Start Chat</button>
        </CardActions>
      </Card>

    </div>
  );
}
