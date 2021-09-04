import React from 'react';
import { useStyles } from './styles';
import clsx from 'clsx';

export default function GridCard(props) {
  const classes = useStyles();

  return (
    <div
      className={clsx({
        [classes.creativeCard]: true,
      })}
    >
      {props.children}
    </div>
  );
}
