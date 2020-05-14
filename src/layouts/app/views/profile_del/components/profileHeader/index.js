import React from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import { useStyles } from './styles';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import clsx from 'clsx';

export function ProfileHeader({ bgImage, profile }) {
  const classes = useStyles();
  const mobile = useMediaQuery('(max-width:800px)');
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
      className={clsx({
        [classes.root]: true,
        [classes.rootMobile]: mobile,
        [classes.rootDesktop]: !mobile,
      })}
    >
      <div
        className={clsx({
          [classes.profileWrapper]: true,
          [classes.profileWrapperMobile]: mobile,
          [classes.profileWrapperDesktop]: !mobile,
        })}
      >
        <div
          className={clsx({
            [classes.avatarWrapper]: true,
            [classes.avatarWrapperMobile]: mobile,
          })}
        >
          <CardMedia
            component="img"
            alt="Profile Photo"
            image={profile.profileImg}
            title="Profile Photo"
            className={classes.avatar}
          />
        </div>
        <div
          className={clsx({
            [classes.profileName]: true,
            [classes.profileNameMobile]: mobile,
          })}
        >
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
