import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';

export default function InlineHeader({ children }) {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
}
