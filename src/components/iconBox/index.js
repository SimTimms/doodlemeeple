import React from 'react';
import { Typography, Icon } from '@material-ui/core';
import { useStyles } from './styles';
export default function IconBox({ count, icon }) {
  const classes = useStyles();
  return (
    <div
      className={classes.root}
      title={`${count} job${count === 1 ? '' : 's'} linked to this game`}
    >
      <Icon style={{ color: '#fff' }}>{icon}</Icon>
      <Typography variant="body1" component="p" style={{ color: '#fff' }}>
        x {count}
      </Typography>
    </div>
  );
}
