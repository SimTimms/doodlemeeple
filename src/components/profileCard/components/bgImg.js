import React from 'react';
import { useStyles } from './styles';
import clsx from 'clsx';
import imageOptimiser from '../../../utils/imageOptimiser';

export default function BgImg({ history, creative }) {
  const classes = useStyles();

  return (
    <a
      href={`/user-profile/${creative._id}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        backgroundImage:
          creative.profileBG !== '' && creative.profileBG
            ? `url(${imageOptimiser(creative.profileBG)})`
            : '#eee',
        boxShadow:
          creative.profileBG !== '' ? '10px 10px 10px rgba(0,0,0,0.2)' : 'none',
      }}
      className={clsx({
        [classes.background]: true,
        [classes.noBG]: !creative.profileBG,
      })}
    >
      <div
        style={{
          backgroundImage:
            creative.profileBG !== '' && creative.profileBG
              ? `url(${imageOptimiser(creative.profileBG)})`
              : '#eee',
          boxShadow:
            creative.profileBG !== ''
              ? '10px 10px 10px rgba(0,0,0,0.2)'
              : 'none',
        }}
        className={clsx({
          [classes.background]: true,
          [classes.noBG]: !creative.profileBG,
        })}
      ></div>
    </a>
  );
}
