import React from 'react';
import { useStyles } from './styles';
import { Row } from '../../../../components';
import { Icon, Typography } from '@material-ui/core';

export default function Button({ menuItem, isActive }) {
  const { name, icon, link, image } = menuItem;
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
    </Row>
  );
}
