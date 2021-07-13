import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import clsx from 'clsx';

export default function BgImg({ previewImage, onClick, ...props }) {
  const classes = useStyles();
  const { skill } = props;
  const headerStr = skill.map((section, index) =>
    index > 0 ? ` | ${section.type}` : section.type
  );

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
      {!previewImage && headerStr && (
        <Typography className={classes.skillName}>{headerStr}</Typography>
      )}
    </div>
  );
}
