import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import clsx from 'clsx';

export default function MenuButtonTab({
  title,
  onClickEvent,
  disabled,
  active,
}) {
  const classes = useStyles();

  return (
    <div
      className={clsx({
        [classes.buttonWrapper]: true,
        [classes.active]: active,
      })}
      onClick={() => !disabled && onClickEvent()}
    >
      <Typography className={classes.title}>{title}</Typography>
    </div>
  );
}
