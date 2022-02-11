import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Stack,
  Card,
  CardContent,
  CardMedia,
  CardActions,
} from '@mui/material';
import useStyles from '../styles';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function HomePage({ accessToken }) {
  const history = useHistory();
  const styles = useStyles();

  return (
    <main>
      {/* Hero unit */}
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
          ) : ('')}
        </Container>
      </Box>
      <Container sx={{ py: 8 }} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    // 16:9
                    pt: '56.25%',
                  }}
                  image="https://source.unsplash.com/random"
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Heading
                  </Typography>
                  <Typography>
                    This is a media card. You can use this section to describe
                    the content.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">View</Button>
                  <Button size="small">Edit</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  );
}
