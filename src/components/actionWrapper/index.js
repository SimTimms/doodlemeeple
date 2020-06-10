import React from 'react';
import { useStyles } from './styles';

export default function ActionWrapper({ children }) {
  const classes = useStyles();
  return <div className={classes.actionWrapper}>{children}</div>;
}
