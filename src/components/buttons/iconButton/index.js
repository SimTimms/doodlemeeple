// @ts-nocheck
import React from 'react';
import { Button, Icon } from '@material-ui/core';
import { useStyles } from './styles';
import clsx from 'clsx';

export default function IconButton({ disabled, onClickEvent, icon }) {
  const classes = useStyles();

  return (
    <Button
      className={clsx({
        [classes.iconButton]: true,
        [classes.iconButtonDisabled]: disabled,
      })}
      disabled={disabled}
      onClick={() => onClickEvent()}
    >
      Submit
      <Icon className={classes.iconButtonIcon}>{icon}</Icon>
    </Button>
  );
}
