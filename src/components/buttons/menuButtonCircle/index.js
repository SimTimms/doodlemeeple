import React from 'react';
import { Icon } from '@material-ui/core';
import { useStyles } from './styles';
import clsx from 'clsx';

export default function MenuButtonCircle({ onClickEvent, disabled, icon }) {
  const classes = useStyles();

  return (
    <div
      className={clsx({
        [classes.buttonWrapper]: true,
        [classes.disabled]: disabled,
      })}
      onClick={() => onClickEvent()}
    >
      <Icon className={classes.icon}>{icon}</Icon>
    </div>
  );
}
