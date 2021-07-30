import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import clsx from 'clsx';

export default function MenuButtonStandard({
  title,
  onClickEvent,
  disabled,
  type,
}) {
  const classes = useStyles();

  return (
    <div
      className={clsx({
        [classes.buttonWrapper]: true,
        [classes.delete]: type === 'delete',
      })}
      onClick={() => !disabled && onClickEvent()}
    >
      <Typography className={classes.title}>{title}</Typography>
    </div>
  );
}
