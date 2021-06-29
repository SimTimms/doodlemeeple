import React from 'react';
import { useStyles } from './styles';
import clsx from 'clsx';

export default function BgImg({ previewImage, onClick }) {
  const classes = useStyles();

  return (
    <div
      style={{
        backgroundImage:
          previewImage !== '' && previewImage ? `url(${previewImage})` : '#eee',
      }}
      className={clsx({
        [classes.background]: true,
        [classes.noBG]: !previewImage,
      })}
      onClick={() => onClick()}
    ></div>
  );
}
