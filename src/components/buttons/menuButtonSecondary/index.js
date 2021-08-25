import React from 'react';
import { Icon, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import clsx from 'clsx';
import { Row } from '../../';

export default function MenuButtonSecondary({
  title,
  active,
  onClickEvent,
  icon,
  disabled,
  count,
}) {
  const classes = useStyles();

  return (
    <div className={classes.buttonWrapper} onClick={() => onClickEvent()}>
      <Row>
        <div
          className={clsx({
            [classes.circle]: true,
            [classes.circleOn]: active,
            [classes.disabled]: disabled,
          })}
        >
          <Icon className={classes.icon}>{icon}</Icon>
        </div>
        {count && count > 0 ? (
          <Icon className={classes.count}>star</Icon>
        ) : null}
      </Row>
      <Typography className={classes.title}>{title}</Typography>
    </div>
  );
}
