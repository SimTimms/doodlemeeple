import React from 'react';
import { useStyles } from './styles';

export default function InlineHeader({ children }) {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
}
