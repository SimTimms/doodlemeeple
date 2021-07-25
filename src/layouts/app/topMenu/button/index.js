import React from 'react';
import { useStyles } from './styles';
import { Column } from '../../../../components';
import { Icon, Typography } from '@material-ui/core';
import { HistoryContext } from '../../../../context';

export default function Button({ menuItem }) {
  const { name, icon, link, image } = menuItem;
  const classes = useStyles();
  return (
    <HistoryContext.Consumer>
      {(history) => {
        return (
          <Column w={80} classAdd={classes.cursor} onClickEvent={link}>
            {image ? (
              <img className={classes.icon} src={image} />
            ) : (
              <Icon className={classes.icon}>{icon}</Icon>
            )}
            <Typography className={classes.title}>{name}</Typography>
          </Column>
        );
      }}
    </HistoryContext.Consumer>
  );
}
