import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import { useStyles } from './styles';
import tim from 'src/assets/tim.jpg';
import { ProfileHeader } from './components';
import { MediaGallery } from 'src/components/mediaGallery';
import boxes from 'src/assets/boxes.jpg';
import smithy from 'src/assets/smithy.jpg';

export function Profile() {
  const classes = useStyles();

  const items = [
    {
      img: smithy,
      title: 'Image',
      author: 'author',
      cols: 1,
    },
    {
      img: boxes,
      title: 'Image',
      author: 'author',
      cols: 2,
    },
    {
      img: smithy,
      title: 'Image',
      author: 'author',
      cols: 1,
    },
  ];
  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <Card className={classes.card}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            backgroundImage: `url(${smithy})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
            width: '100%',
            height: 300,
            padding: 10,
          }}
        >
          <div>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image={tim}
              title="Contemplative Reptile"
              style={{
                borderRadius: '50%',
                border: '10px solid #fff',
                marginBottom: -50,
              }}
            />
          </div>
        </div>

        <CardContent>
          <ProfileHeader title="Tim Simms" />
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <Divider />
        <CardContent>
          <ProfileHeader title="Graphic Artist" />
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            gutterBottom
          >
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          <MediaGallery items={items} />
        </CardContent>
        <Divider />
        <CardContent>
          <ProfileHeader title="Fantasy Artist" />
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            gutterBottom
          >
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          <MediaGallery items={items} />
        </CardContent>
      </Card>
    </Slide>
  );
}
