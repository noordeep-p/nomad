/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
  info: {
    height: '100%',
    minHeight: '128px',
  },
  media: {
    height: '128px',
  },
  firstColumn: {
    paddingRight: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(2),
      paddingRight: theme.spacing(0),
    },
  },
}));

export default function MapCard(props) {
  const classes = useStyles();
  const mapCards = props.cards.reverse();
  return (
    mapCards.map((card) => (
      <section key={card._id}>
        <Container maxWidth="lg">
          <Box pt={8} pb={10}>
            <Grid container>
              <Grid item xs={12} lg={6} className={classes.firstColumn}>
                <Card className={classes.info}>
                  <CardContent className={classes.info}>
                    <Box
                      display="flex"
                      flexDirection="column"
                      height="100%"
                      pt={2}
                      px={2}
                    >
                      <Typography variant="h5" component="h2" gutterBottom>
                        {card.title}
                      </Typography>
                      <Box mt="auto" mb={2}>
                        <Typography
                          variant="body1"
                          component="p"
                          color="textSecondary"
                        >
                          {card.description}
                        </Typography>
                      </Box>
                      <Box textAlign="right">
                        <Button color="primary" endIcon={<ArrowRightAltIcon />}>
                          View this itinerary
                        </Button>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} lg={6}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={8}>
                    <Card>
                      <CardActionArea href="#">
                        <CardMedia
                          className={classes.media}
                          image="https://wttc.org/DesktopModules/MVC/NewsArticleList/images/141_20201013185512_Consumer%20Survey%20Finds%2070%20Percent%20of%20Travelers%20Plan%20to%20Holiday%20in%202021.jpg"
                        />
                      </CardActionArea>
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Card>
                      <CardActionArea href="#">
                        <CardMedia
                          className={classes.media}
                          image="https://wttc.org/DesktopModules/MVC/NewsArticleList/images/141_20201013185512_Consumer%20Survey%20Finds%2070%20Percent%20of%20Travelers%20Plan%20to%20Holiday%20in%202021.jpg"
                          alt="img"
                        />
                      </CardActionArea>
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Card>
                      <CardActionArea href="#">
                        <CardMedia
                          className={classes.media}
                          image="https://wttc.org/DesktopModules/MVC/NewsArticleList/images/141_20201013185512_Consumer%20Survey%20Finds%2070%20Percent%20of%20Travelers%20Plan%20to%20Holiday%20in%202021.jpg"
                          alt="imag"
                        />
                      </CardActionArea>
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={8}>
                    <Card>
                      <CardActionArea href="#">
                        <CardMedia
                          className={classes.media}
                          image="https://wttc.org/DesktopModules/MVC/NewsArticleList/images/141_20201013185512_Consumer%20Survey%20Finds%2070%20Percent%20of%20Travelers%20Plan%20to%20Holiday%20in%202021.jpg"
                        />
                      </CardActionArea>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </section>
    ))
  );
}
