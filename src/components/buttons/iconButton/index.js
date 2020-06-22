import React from 'react';
import { Button, Icon } from '@material-ui/core';
import { useStyles } from './styles';
import clsx from 'clsx';

export default function IconButton({
  disabled,
  onClickEvent,
  icon,
  title,
  color,
  styleOverride,
  type,
}) {
  const classes = useStyles();
  return (
    <Button
      type={type}
      className={clsx({
        [classes.iconButton]: true,
        [classes.iconButtonSecondary]: color === 'secondary',
        [classes.iconButtonWarning]: color === 'warning',
        [classes.iconButtonDisabled]: disabled,
      })}
      disabled={disabled}
      onClick={() => onClickEvent()}
      style={styleOverride && styleOverride}
    >
      {title}
      <Icon
        className={clsx({
          [classes.iconButtonIcon]: true,
          [classes.iconButtonIconSecondary]: color === 'secondary',
        })}
      >
        {icon}
      </Icon>
    </Button>
  );
}
