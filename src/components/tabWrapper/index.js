import React from 'react';
import { useStyles } from './styles';

export default function TabWrapper({ children }) {
  const classes = useStyles();
  return <div className={classes.actionWrapper}>{children}</div>;
}
