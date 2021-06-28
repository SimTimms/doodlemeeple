import React from 'react';
import { useStyles } from './styles';
import clsx from 'clsx';
import imageOptimiser from '../../../utils/imageOptimiser';

export default function BgImg({ creative }) {
  const classes = useStyles();

  return (
    <div
      style={{
        backgroundImage:
          creative.profileBG !== '' && creative.profileBG
            ? `url(${imageOptimiser(creative.profileBG)})`
            : '#eee',
      }}
      className={clsx({
        [classes.background]: true,
        [classes.noBG]: !creative.profileBG,
      })}
    ></div>
  );
}
