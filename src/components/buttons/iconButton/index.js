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
        [classes.iconButtonText]: color === 'text',
        [classes.iconButtonTextWhite]: color === 'text-white',
        [classes.iconButtonDisabled]: disabled,
      })}
      disabled={disabled}
      onClick={() => onClickEvent()}
      style={styleOverride && styleOverride}
    >
      {title}
      {icon !== '' && (
        <Icon
          className={clsx({
            [classes.iconButtonIcon]: true,
            [classes.iconButtonIconSecondary]: color === 'secondary',
            [classes.iconButtonIconText]: color === 'text',
            [classes.iconButtonIconTextWhite]: color === 'text-white',
          })}
        >
          {icon}
        </Icon>
      )}
    </Button>
  );
}
