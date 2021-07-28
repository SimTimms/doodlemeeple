import React from 'react';
import { Icon, Typography } from '@material-ui/core';
import { useStyles } from './styles';

export default function MenuButtonStandard({
  title,
  onClickEvent,
  icon,
  disabled,
}) {
  const classes = useStyles();

  return (
    <div
      className={classes.buttonWrapper}
      onClick={() => !disabled && onClickEvent()}
    >
      <div className={classes.circle}>
        <Icon className={classes.icon}>{icon}</Icon>
      </div>
      <Typography className={classes.title}>{title}</Typography>
    </div>
  );
}
