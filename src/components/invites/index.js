import React from 'react';
import Icon from '@material-ui/core/Icon';
import { useStyles } from './styles';
import CardMedia from '@material-ui/core/CardMedia';

export function InvitesWidget({ invites }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {invites.map((invite, index) => (
        <CardMedia
          key={`cardmedia_${index}`}
          className={classes.profileImg}
          component="img"
          alt="Profile Photo"
          image={invite.profileImg}
          title="Profile Photo"
        />
      ))}

      <div className={classes.inviteAdd}>
        <Icon style={{ fontSize: 50, color: '#fff' }}>add_circle</Icon>
      </div>
    </div>
  );
}
