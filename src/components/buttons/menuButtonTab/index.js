import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import clsx from 'clsx';
import Icon from '@material-ui/core/Icon';

export default function MenuButtonTab({
  title,
  onClickEvent,
  disabled,
  active,
  icon,
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
      {icon && <Icon>{icon}</Icon>}
    </div>
  );
}
