import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import clsx from 'clsx';

export default function BgImg({ previewImage, onClick, ...props }) {
  const classes = useStyles();
  const { skill } = props;
  return (
    <div
      style={{
        backgroundImage:
          previewImage !== '' && previewImage ? `url(${previewImage})` : '#eee',
      }}
      className={clsx({
        [classes.background]: true,
      })}
      onClick={() => onClick()}
    >
      {!previewImage && skill && (
        <Typography className={classes.skillName}>{skill}</Typography>
      )}
    </div>
  );
}
