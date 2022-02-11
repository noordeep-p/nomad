import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Box, Typography, Button, Container, Grid, Stack,
} from '@mui/material';
import useStyles from '../styles';
import MapCard from './MapCard';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function HomePage({ accessToken }) {
  const history = useHistory();
  const styles = useStyles();

  return (
    <main>
      <Box>
        <Container maxWidth="xl" className={styles.homepage}>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
          >
            Nomad
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            Find and share your itineraries and visited places with others
            around the world!
          </Typography>
          {!accessToken ? (
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button
                onClick={() => {
                  history.push('/login');
                }}
                variant="contained"
                color="primary"
              >
                Login
              </Button>
              <Button
                onClick={() => {
                  history.push('/register');
                }}
                variant="contained"
                color="primary"
              >
                Register
              </Button>
            </Stack>
          ) : (
            ''
          )}
        </Container>
      </Box>
      <Container sx={{ py: 8 }} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={6}>
          {cards.map(() => (
            <MapCard accessToken={accessToken} />
          ))}
        </Grid>
      </Container>
    </main>
  );
}
