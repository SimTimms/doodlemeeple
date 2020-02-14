import React from 'react';
import { styles } from './styles';

export function Content(props) {
  const classes = styles();
  return <div className={classes.content}>{props.children}</div>;
}

export function ContentTop(props) {
  const classes = styles();
  return <div className={classes.contentTop}>{props.children}</div>;
}
