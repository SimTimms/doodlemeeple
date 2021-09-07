import React from 'react';
import { useStyles } from './styles';

export default function MainWrapper(props) {
  const classes = useStyles();

  return <div className={classes.root}>{props.children}</div>;
}
