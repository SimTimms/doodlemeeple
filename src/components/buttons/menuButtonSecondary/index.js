import React from 'react';
import { Icon, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import { Row } from '../../';

export default function MenuButtonSecondary({ title, active, onClickEvent }) {
  const classes = useStyles();

  return (
    <div className={classes.buttonWrapper} onClick={() => onClickEvent()}>
      <div className={`${classes.circle} ${active && classes.circleOn}`}></div>
      <Typography className={classes.title}>{title}</Typography>
    </div>
  );
}
