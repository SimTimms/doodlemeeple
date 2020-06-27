import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import clsx from 'clsx';

export default function NoticeBox({ title, subTitle, color }) {
  const classes = useStyles();

  return (
    <div
      className={clsx({
        [classes.root]: true,
        [classes.primary]: color === 'primary',
        [classes.secondary]: color === 'secondary',
        [classes.warning]: color === 'warning',
      })}
    >
      <Typography variant="h4">{title}</Typography>
      <Typography variant="body1">{subTitle}</Typography>
    </div>
  );
}
