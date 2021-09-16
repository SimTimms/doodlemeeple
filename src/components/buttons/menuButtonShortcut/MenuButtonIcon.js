import React from 'react';
import { Icon } from '@material-ui/core';
import { useStyles } from './styles';
import clsx from 'clsx';

export default function MenuButtonIcon({ text, active }) {
  const classes = useStyles();

  return (
    <Icon
      className={clsx({
        [classes.iconIcon]: true,
        [classes.iconIconNoMargin]: text.name === '',
        [classes.dark]: text.color === 'light',
        [classes.warning]: text.back
          ? text.back === 'warning'
            ? true
            : false
          : false,
        [classes.primary]: text.back
          ? text.back === 'primary'
            ? true
            : false
          : false,
        [classes.secondary]: text.back
          ? text.back === 'secondary'
            ? true
            : false
          : false,
        [classes.borderSecondary]: text.border === 'secondary',
        [classes.borderWarning]: text.border === 'warning',
        [classes.backHover]: text.name === '',
        [classes.active]: active,
      })}
    >
      {text.icon}
    </Icon>
  );
}
