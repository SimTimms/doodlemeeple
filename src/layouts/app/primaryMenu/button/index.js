import React from 'react';
import { useStyles } from './styles';
import { Row } from '../../../../components';
import { Icon, Typography } from '@material-ui/core';
import clsx from 'clsx';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default function Button({ menuItem, isActive }) {
  const { name, icon, link, image, count } = menuItem;
  const classes = useStyles();
  const mobile = useMediaQuery('(max-width:900px)');
  return (
    <div
      className={clsx({
        [classes.row]: true,
        [classes.cursor]: true,
        [classes.cursorActive]: isActive,
        [classes.column]: mobile,
      })}
      onClick={() => link()}
    >
      {image ? (
        <img className={`${classes.icon} ${classes.iconImage}`} src={image} />
      ) : (
        <Icon className={classes.icon}>{icon}</Icon>
      )}
      <Typography className={classes.title}>{name}</Typography>
      {count && count.count > 0 && (
        <div className={classes.countIcon}>
          <Typography>{count && count.count}</Typography>
        </div>
      )}
    </div>
  );
}
