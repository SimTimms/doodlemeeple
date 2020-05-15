import React from 'react';
import { Card } from '@material-ui/core';
import { useStyles } from './styles';

export default function DMCard({ children }) {
  const classes = useStyles();
  return <Card className={classes.card}>{children}</Card>;
}
