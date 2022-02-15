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

  const content = {
    '02_header': 'The title of the shared itinerary will go here.',
    '02_description':
      'This is the placeholder for the description for the specific shared itinerary',
    'primary-action': 'View this itinerary',
    image1:
      'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    image2:
      'https://images.unsplash.com/photo-1488085061387-422e29b40080?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80',
    image3:
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    image4:
      'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=683&q=80',
    ...props.content,
  };

  return (
    <section>
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
                      {content['02_header']}
                    </Typography>
                    <Box mt="auto" mb={2}>
                      <Typography
                        variant="body1"
                        component="p"
                        color="textSecondary"
                      >
                        {content['02_description']}
                      </Typography>
                    </Box>
                    <Box textAlign="right">
                      <Button color="primary" endIcon={<ArrowRightAltIcon />}>
                        {content['primary-action']}
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
                        image={content.image1}
                      />
                    </CardActionArea>
                  </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Card>
                    <CardActionArea href="#">
                      <CardMedia
                        className={classes.media}
                        image={content.image2}
                      />
                    </CardActionArea>
                  </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Card>
                    <CardActionArea href="#">
                      <CardMedia
                        className={classes.media}
                        image={content.image3}
                      />
                    </CardActionArea>
                  </Card>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Card>
                    <CardActionArea href="#">
                      <CardMedia
                        className={classes.media}
                        image={content.image4}
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
  );
}
