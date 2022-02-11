import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActions, Button } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function MapCard() {
  const map = {
    owner: 'John Doe',
    title: 'Map Title',
    description: 'Map Description',
    image: 'https://source.unsplash.com/random',
    imageText: 'Map Image',
    linkText: 'https://www.google.com',
    favorite: true,
  };

  return (
    <Grid item key={1} xs={12} md={12}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {map.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {map.date}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {map.description}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              Created by
              {' '}
              {map.owner}
            </Typography>
            <CardActions>
              <Button size="small">
                Add to Favorites
                {' '}
                {map.favorite ? (
                  <FavoriteIcon sx={{ color: 'red' }} />
                ) : (
                  <FavoriteBorderIcon sx={{ color: 'red' }} />
                )}
              </Button>
            </CardActions>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 200, display: { xs: 'none', sm: 'block' } }}
            image={map.image}
            alt={map.imageLabel}
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
}
