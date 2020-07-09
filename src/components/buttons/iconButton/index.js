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
  iconPos,
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
        [classes.iconButtonTextDark]: color === 'text-dark',
        [classes.iconButtonTextError]: color === 'text-error',
        [classes.iconButtonDisabled]: disabled,
      })}
      disabled={disabled}
      onClick={() => onClickEvent()}
      style={styleOverride && styleOverride}
    >
      {icon !== '' && iconPos !== 'right' && (
        <Icon
          className={clsx({
            [classes.iconButtonIcon]: true,
            [classes.iconButtonIconSecondary]: color === 'secondary',
            [classes.iconButtonIconText]: color === 'text',
            [classes.iconButtonIconTextWhite]: color === 'text-white',
            [classes.iconButtonIconTextDark]: color === 'text-dark',
            [classes.iconButtonIconTextError]: color === 'text-error',
            [classes.iconLeft]: iconPos !== 'right',
          })}
        >
          {icon}
        </Icon>
      )}
      {title}
      {icon !== '' && iconPos === 'right' && (
        <Icon
          className={clsx({
            [classes.iconButtonIcon]: true,
            [classes.iconButtonIconSecondary]: color === 'secondary',
            [classes.iconButtonIconText]: color === 'text',
            [classes.iconButtonIconTextWhite]: color === 'text-white',
            [classes.iconButtonIconTextDark]: color === 'text-dark',
            [classes.iconButtonIconTextError]: color === 'text-error',
            [classes.iconRight]: iconPos === 'right',
          })}
        >
          {icon}
        </Icon>
      )}
    </Button>
  );
}
