import React from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import { useStyles } from './styles';
import Typography from '@material-ui/core/Typography';

export function ProfileHeader({ bgImage, profile }) {
  const classes = useStyles();
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
      className={classes.root}
    >
      <div className={classes.profileWrapper}>
        <div className={classes.avatarWrapper}>
          <CardMedia
            component="img"
            alt="Profile Photo"
            image={profile.profileImg}
            title="Profile Photo"
            className={classes.avatar}
          />
        </div>
        <div className={classes.profileName}>
          <Typography variant="h1" color="textPrimary">
            {profile.userName}
          </Typography>
          <Typography variant="h2" color="textPrimary">
            {profile.summary}
          </Typography>
        </div>
      </div>
    </div>
  );
}
