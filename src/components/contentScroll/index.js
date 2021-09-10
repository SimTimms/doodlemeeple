import React from 'react';
import { useStyles } from './styles';
import clsx from 'clsx';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default function AppLayout(props) {
  const classes = useStyles();
  const mobile = useMediaQuery('(max-width:900px)');
  return (
    <main
      className={clsx({
        [classes.content]: true,
        [classes.row]: mobile,
      })}
    >
      {props.children}
    </main>
  );
}
