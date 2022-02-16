import React from 'react';

// import { FixedSizeList } from 'react-window';
import TextField from '@mui/material/TextField';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@mui/material/Button';
import { Divider } from '@mui/material';

export default function Convo() {
  return (
    <div>
      <CssBaseline />
      <Grid container justifyContent="center">
        <Grid item xs={12}>
          <Typography component="h2" variant="h5">Chat Room</Typography>
        </Grid>
      </Grid>
      <Grid container component={Paper}>
        <div style={{ height: 300, width: '100%' }}>
          <List>
            <ListItem>
              <ListItemText>
                message
              </ListItemText>
            </ListItem>
          </List>
        </div>
        <Divider />
        <Grid container style={{ top: 700, position: 'fixed', width: '100%' }}>
          <Grid item xs={9}>
            <TextField id="outlined-basic" label="Enter Message" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={2}>
            <Button size="large" style={{ width: '60%' }} variant="contained">Send</Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
