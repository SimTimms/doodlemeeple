import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';

export default function HrefLink({ url, title }) {
  const classes = useStyles();
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={classes.root}
    >
      <Typography className={classes.root}>{title}</Typography>
    </a>
  );
}
