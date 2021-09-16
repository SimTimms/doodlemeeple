import React from 'react';
import { useStyles } from './styles';

export default function Avatar({ profileImg, size }) {
  const classes = useStyles();
  return (
    <div
      className={classes.root}
      style={{
        minHeight: size,
        height: size,
        maxHeight: size,
        minWidth: size,
        maxWidth: size,
        width: size,
        backgroundImage: `url(${profileImg})`,
      }}
    ></div>
  );
}
