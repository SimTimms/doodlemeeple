import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import clsx from 'clsx';

export default function FieldButton({
  icon,
  title,
  on,
  visible,
  onClickEvent,
}) {
  const classes = useStyles();

  return (
    <div
      style={{
        backgroundImage: `url(${icon})`,
        filter: !on ? 'grayscale(1)' : '',
        opacity: !on ? '0.5' : '1',
      }}
      className={clsx({
        [classes.iconButton]: true,
        [classes.iconButtonOn]: visible,
      })}
      onClick={onClickEvent}
    >
      <Typography style={{ fontSize: 10, marginTop: 3 }}>{title}</Typography>
    </div>
  );
}
