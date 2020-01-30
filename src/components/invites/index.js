import React from 'react';
import Icon from '@material-ui/core/Icon';
import { useStyles } from './styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

export function InvitesWidget({ invites }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {invites.map((invite, index) => (
        <CardMedia
          component="img"
          alt="Profile Photo"
          height="140"
          image={invite.profileImg}
          title="Profile Photo"
          style={{
            borderRadius: '50%',
            border: '10px solid #fff',
            marginBottom: -50,
          }}
        />
      ))}

      <div
        style={{
          height: '100%',
          background: '#ddd',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center ',
          padding: 10,
        }}
      >
        <Icon style={{ fontSize: 50, color: '#fff' }}>add_circle</Icon>
      </div>
    </div>
  );
}
