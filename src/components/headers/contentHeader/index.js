import React from 'react';
import { useStyles } from './styles';

export function ContentHeader({ children }) {
  const classes = useStyles();
  return <div className={classes.wrapper}>{children}</div>;
}
