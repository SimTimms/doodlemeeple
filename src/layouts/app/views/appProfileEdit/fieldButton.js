import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import clsx from 'clsx';
import { Column } from '../../../../components';

export default function FieldButton({
  icon,
  title,
  on,
  visible,
  onClickEvent,
}) {
  const classes = useStyles();

  return (
    <Column>
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
      ></div>
      <Typography style={{ fontSize: 10, marginTop: 3 }}>{title}</Typography>
    </Column>
  );
}
