import React from 'react';
import { useStyles } from './styles';
import clsx from 'clsx';

export default function AppLayout(props) {
  const classes = useStyles();

  return (
    <main
      className={clsx({
        [classes.content]: true,
      })}
    >
      {props.children}
    </main>
  );
}
