import React from 'react';
import { Button, Icon, Typography } from '@material-ui/core';
import { useStyles } from './styles';

export default function InviteButton() {
  const classes = useStyles();
  return (
    <Button variant="contained" className={classes.root}>
      <Icon style={{ color: '#fff' }}>thumb_up</Icon>{' '}
      <Typography
        variant="body1"
        component="p"
        style={{ color: '#fff', marginLeft: 10 }}
      >
        Invite
      </Typography>
    </Button>
  );
}
