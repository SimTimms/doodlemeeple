import React from 'react';
import { useStyles } from './styles';

export default function Avatar({ img }) {
  const classes = useStyles();

  return (
    <div
      className={classes.avatar}
      style={{
        backgroundImage: img
          ? `url(${img}`
          : `url(${process.env.REACT_APP_DEVICE})`,
      }}
    ></div>
  );
}
