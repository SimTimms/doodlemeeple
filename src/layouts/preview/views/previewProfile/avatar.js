import React from 'react';
import { useStyles } from './styles';
import logoDevice from '../../../../assets/dm_device.png';

export default function Avatar({ img }) {
  const classes = useStyles();

  return (
    <div
      className={classes.avatar}
      style={{
        backgroundImage: img ? `url(${img}` : `url(${logoDevice})`,
      }}
    ></div>
  );
}
