import React from 'react';
import { useStyles } from './styles';

function ContentHeader({ children }) {
  const classes = useStyles();
  return <div className={classes.wrapper}>{children}</div>;
}

export default ContentHeader;
