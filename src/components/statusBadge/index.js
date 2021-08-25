import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import clsx from 'clsx';

export default function StatusBadge({ red, status }) {
  const classes = useStyles();
  return (
    <Typography
      style={{ fontSize: 12 }}
      className={clsx({
        [classes.dull]: true,
        [classes.red]: red,
      })}
    >
      {status}
    </Typography>
  );
}
