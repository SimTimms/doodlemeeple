import React from 'react';
import Card from '@material-ui/core/Card';
import { useStyles } from './styles';

export default function CardComponent({ children }) {
  const classes = useStyles();

  return <Card className={classes.card}>{children}</Card>;
}
