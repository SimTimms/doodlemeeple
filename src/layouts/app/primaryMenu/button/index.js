import React from 'react';
import { useStyles } from './styles';
import { Row } from '../../../../components';
import { Icon, Typography } from '@material-ui/core';

export default function Button({ menuItem, isActive }) {
  console.log(menuItem);
  const { name, icon, link, image, count } = menuItem;
  const classes = useStyles();
  return (
    <Row
      w="100%"
      className={`${classes.cursor} ${isActive && classes.cursorActive}`}
      onClickEvent={link}
      j="flex-start"
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
    </Row>
  );
}
