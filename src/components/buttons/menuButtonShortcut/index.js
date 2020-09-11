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
      key={text.name}
      onClick={() => {
        onClickEvent();
      }}
    >
      <ListItem button style={{ paddingLeft: 5, paddingRight: 5 }}>
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
              [classes.active]: active,
            })}
          >
            {active ? 'keyboard_arrow_down' : text.icon}
          </Icon>
        </div>
        <Typography
          className={clsx({
            [classes.button]: !mobile,
            [classes.buttonMobile]: mobile,
          })}
        >
          {text.name}
        </Typography>
      </ListItem>
    </div>
  );
}
