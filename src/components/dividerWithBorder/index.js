import React from 'react';
import { useStyles } from './styles';

export default function DividerWithBorder() {
  const classes = useStyles();

  return <div className={classes.root}></div>;
}
