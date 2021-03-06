/* eslint-disable no-underscore-dangle */
import * as React from 'react';
import axios from 'axios';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { useHistory } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function NewMapModal() {
  const currentUserId = localStorage.getItem('userId');
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleNewMap = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    axios
      .post('http://localhost:8000/maps', {
        owner: currentUserId,
        title: data.get('title'),
        description: data.get('description'),
        city: data.get('city'),
      })
      .then((res) => {
        if (res) {
          console.log(res.data._id);
          history.push(`/map/${res.data._id}`);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <Button style={{ color: 'white' }} onClick={handleOpen}>New Shared Itinerary</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box
            sx={style}
            component="form"
            noValidate
            onSubmit={(event) => handleNewMap(event)}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="title"
                  required
                  fullWidth
                  id="title"
                  label="Title"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="description"
                  label="Short Description"
                  name="description"
                  autoComplete="description"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="city"
                  label="City"
                  type="city"
                  id="city"
                  autoComplete="new-city"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create Shared Itinerary
            </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
