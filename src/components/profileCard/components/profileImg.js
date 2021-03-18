import React from 'react';
import { useStyles } from './styles';
import clsx from 'clsx';

export default function ProfileImg({ history, creative }) {
  const classes = useStyles();

  return (
    <div
      className={clsx({
        [classes.creativeCardBackground]: true,
        [classes.noProfile]: !creative.profileImg,
        [classes.profileNoBG]: !creative.profileBG,
      })}
      style={{
        backgroundImage:
          creative.profileImg !== '' ? `url(${creative.profileImg})` : `#ddd`,
      }}
      onClick={() => history.push(`/app/public-preview/${creative._id}`)}
    ></div>
  );
}
