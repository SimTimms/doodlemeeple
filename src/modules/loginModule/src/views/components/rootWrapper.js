import React from 'react';
import { styles } from './styles';

export default function RootWrapper(props) {
  const classes = styles();

  return <div className={classes.root}>{props.children}</div>;
}
