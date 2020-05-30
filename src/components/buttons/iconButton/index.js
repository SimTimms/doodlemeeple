import React from 'react';
import { Button, Icon } from '@material-ui/core';
import { useStyles } from './styles';
import clsx from 'clsx';

export default function IconButton({
  disabled,
  onClickEvent,
  icon,
  title,
  secondaryColor,
  warning,
}) {
  const classes = useStyles();

  return (
    <Button
      className={clsx({
        [classes.iconButton]: true,
        [classes.iconButtonSecondary]: secondaryColor,
        [classes.iconButtonWarning]: warning,
        [classes.iconButtonDisabled]: disabled,
      })}
      disabled={disabled}
      onClick={() => onClickEvent()}
    >
      {title}
      <Icon
        className={clsx({
          [classes.iconButtonIcon]: true,
          [classes.iconButtonIconSecondary]: secondaryColor,
        })}
      >
        {icon}
      </Icon>
    </Button>
  );
}
