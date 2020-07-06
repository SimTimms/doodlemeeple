import React from 'react';
import { useStyles } from './styles';

export function InlineHeader({ children }) {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
}

export function InlineHeaderWarning({ children }) {
  const classes = useStyles();
  return <div className={classes.rootWarning}>{children}</div>;
}
