import React from 'react';
import { useStyles } from './styles';
import { Typography } from '@material-ui/core';
import clsx from 'clsx';

export default function TrafficLight({ str, status }) {
  const classes = useStyles();

  return (
    <Typography
      className={clsx({
        [classes.trafficLight]: true,
        [classes.red]: true,
        [classes.amber]: status === 'amber',
        [classes.green]: status === 'green',
        [classes.dull]: status === 'dull',
      })}
      align="center"
    >
      {str}
    </Typography>
  );
}
