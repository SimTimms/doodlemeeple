import React from 'react';
import { Icon, Typography } from '@material-ui/core';
import { useStyles } from './styles';

export default function IconTitle({ title, icon }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Icon
        style={{
          marginRight: 5,
        }}
      >
        {icon}
      </Icon>
      <Typography variant="body1">{title}</Typography>
    </div>
  );
}
