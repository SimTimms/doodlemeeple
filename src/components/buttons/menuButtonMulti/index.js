import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import clsx from 'clsx';

export default function MenuButtonMulti({
  title,
  onClickEvent,
  disabled,
  active,
}) {
  const classes = useStyles();

  return (
    <div
      className={classes.buttonWrapper}
      onClick={() => !disabled && onClickEvent()}
    >
      <div
        className={clsx({
          [classes.circle]: true,
          [classes.active]: active,
        })}
      ></div>
      <Typography className={classes.title}>{title}</Typography>
    </div>
  );
}
