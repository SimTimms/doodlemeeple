import React from 'react';
import { ListItem, Icon, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import clsx from 'clsx';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default function MenuButtonShortcut({ text, onClickEvent, active }) {
  const mobile = useMediaQuery('(max-width:800px)');
  const classes = useStyles();

  return (
    <div
      className={classes.link}
      onClick={() => {
        onClickEvent();
      }}
    >
      <ListItem
        button
        style={{ paddingLeft: 5, paddingRight: 10 }}
        className={clsx({
          [classes.buttonRoot]: true,
          [classes.active]: active,
        })}
      >
        <div
          className={clsx({
            [classes.iconButton]: true,
            [classes.iconButtonOnly]: text.name === '',
          })}
        >
          <Icon
            className={clsx({
              [classes.iconIcon]: true,
              [classes.dark]: text.color === 'white',
            })}
            style={{ color: text.color }}
          >
            {text.icon}
          </Icon>
        </div>
        <Typography
          className={clsx({
            [classes.button]: !mobile,
            [classes.buttonMobile]: mobile,
          })}
          style={{ color: text.color }}
        >
          {text.name}
        </Typography>
      </ListItem>
    </div>
  );
}
