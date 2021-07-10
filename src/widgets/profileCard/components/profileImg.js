import React from 'react';
import { useStyles } from './styles';
import clsx from 'clsx';

export default function ProfileImg({ creative }) {
  const classes = useStyles();

  return (
    <div
      className={clsx({
        [classes.creativeCardBackground]: true,
      })}
      style={{
        backgroundImage:
          creative.profileImg !== '' ? `url(${creative.profileImg})` : `#ddd`,
      }}
    ></div>
  );
}
