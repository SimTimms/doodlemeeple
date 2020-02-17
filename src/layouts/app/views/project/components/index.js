import React from 'react';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import { useStyles } from './styles';

export function ProjectHeader({ bgImage, profile }) {
  const classes = useStyles();
  return (
    <div
      className={classes.root}
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    ></div>
  );
}
export function CardHeader({ title }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Typography gutterBottom variant="h5" component="h2">
        {title}
      </Typography>
    </div>
  );
}

export function ProfileHeader({ title, user, tags }) {
  const classes = useStyles();
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}
    >
      <div className={classes.avatarWrapper}>
        <CardMedia
          component="img"
          alt="Profile Photo"
          image={user.profileImg}
          title="Profile Photo"
          className={classes.avatar}
        />
      </div>
      <div className={classes.profileNameWrapper}>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          style={{ marginTop: -20 }}
        >
          {title} <span style={{ color: '#aaa' }}>by {user.name}</span>
        </Typography>
        <Typography gutterBottom component="p" color="textSecondary">
          {tags.map(tag => `${tag} `)}
        </Typography>
      </div>
    </div>
  );
}
