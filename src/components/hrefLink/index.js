import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import clsx from 'clsx';

export default function HrefLink({ url, title, underline }) {
  const classes = useStyles();
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={classes.root}
    >
      <Typography
        className={clsx({
          [classes.root]: true,
          [classes.underline]: underline,
        })}
      >
        {title}
      </Typography>
    </a>
  );
}
