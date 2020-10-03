import React from 'react';
import { ListItem, Icon, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import clsx from 'clsx';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default function MenuButtonShortcut({
  text,
  onClickEvent,
  active,
  ...props
}) {
  const mobile = useMediaQuery('(max-width:800px)');
  const classes = useStyles();
  const { column } = props;

  return (
    <div
      className={classes.link}
      onClick={() => {
        onClickEvent();
      }}
    >
      <ListItem
        button
        style={{
          paddingLeft: 10,
          paddingRight: 10,
        }}
        className={clsx({
          [classes.buttonRoot]: true,
          [classes.active]: active,
          [classes.buttonRootColumn]: column,
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
              [classes.iconIconNoMargin]: text.name === '',
              [classes.iconIconColumn]: column,
              [classes.dark]: text.color === 'white',
              [classes.warning]: text.back
                ? text.back === 'warning'
                  ? true
                  : false
                : false,
              [classes.primary]: text.back
                ? text.back === 'primary'
                  ? true
                  : false
                : false,
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
