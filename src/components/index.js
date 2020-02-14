import React from 'react';
import { styles } from './styles';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
const drawerWidth = 240;

export function Content(props) {
  const classes = styles();
  return <div className={clsx(classes.content)}>{props.children}</div>;
}

export function ContentTop(props) {
  const classes = styles();
  return <div className={clsx(classes.contentTop)}>{props.children}</div>;
}
