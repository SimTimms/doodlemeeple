import React from 'react';
import { Icon, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import clsx from 'clsx';

export default function MenuButtonSecondary({
  title,
  active,
  onClickEvent,
  icon,
}) {
  const classes = useStyles();

  return (
    <div className={classes.buttonWrapper} onClick={() => onClickEvent()}>
      <div
        className={clsx({
          [classes.circle]: true,
          [classes.circleOn]: active,
        })}
      >
        <Icon className={classes.icon}>{icon}</Icon>
      </div>
      <Typography className={classes.title}>{title}</Typography>
    </div>
  );
}
