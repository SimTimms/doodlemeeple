import React from 'react';
import { useStyles } from './styles';
import clsx from 'clsx';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default function MainWrapper(props) {
  const classes = useStyles();
  const mobile = useMediaQuery('(max-width:900px)');

  return (
    <div
      className={clsx({
        [classes.root]: true,
        [classes.row]: mobile,
      })}
    >
      {props.children}
    </div>
  );
}
