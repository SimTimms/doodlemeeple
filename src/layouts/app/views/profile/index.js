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
import { MediaGallery } from '../../../../components/mediaGallery';
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
        <div className={classes.profileWrapper}>
          <div>
            <CardMedia
              className={classes.avatar}
              component="img"
              alt="Contemplative Reptile"
              image={tim}
              title="Contemplative Reptile"
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
          <MediaGallery
            items={items}
            sketches={null}
            setSketches={null}
            edit={false}
          />
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
          <MediaGallery
            items={items}
            sketches={null}
            setSketches={null}
            edit={false}
          />
        </CardContent>
      </Card>
    </Slide>
  );
}
