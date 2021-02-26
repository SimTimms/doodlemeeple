import React from 'react';
import { useStyles } from './styles';
import clsx from 'clsx';

export default function MenuButtonImage({ text, imageIcon }) {
  const classes = useStyles();

  return (
    <img
      src={imageIcon}
      className={clsx({
        [classes.iconImage]: true,
        [classes.iconIconNoMargin]: text.name === '',
      })}
      style={{ color: text.color }}
      alt=""
    />
  );
}
