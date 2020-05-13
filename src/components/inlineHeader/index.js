import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';

export default function InlineHeader({ children }) {
  const classes = useStyles();
  return (
    <Typography variant="body1" className={classes.root}>
      {children}
    </Typography>
  );
}
