import React from 'react';
import { ListItem, Icon, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import clsx from 'clsx';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Row } from '../../';

export default function MenuButtonShortcut({
  text,
  onClickEvent,
  active,
  ...props
}) {
  const mobile = useMediaQuery('(max-width:800px)');
  const classes = useStyles();
  const { column, countIcon } = props;

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
          [classes.buttonRootNoBackHover]: text.name === '',
        })}
      >
        <div
          className={clsx({
            [classes.iconButton]: true,
            [classes.iconIconColumn]: column,
            [classes.iconButtonOnly]: text.name === '',
          })}
        >
          <Icon
            className={clsx({
              [classes.iconIcon]: true,
              [classes.iconIconNoMargin]: text.name === '',
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
              [classes.secondary]: text.back
                ? text.back === 'secondary'
                  ? true
                  : false
                : false,
              [classes.borderSecondary]: text.border === 'secondary',
              [classes.borderWarning]: text.border === 'warning',
              [classes.backHover]: text.name === '',
            })}
            style={{ color: text.color }}
          >
            {text.icon}
          </Icon>
        </div>
        <Row
          j={text.count > 0 ? 'space-between' : column ? 'center' : 'flex-end'}
          w="100%"
        >
          {text.count > 0 &&
            (!countIcon ? (
              <Typography className={classes.count}>{text.count}</Typography>
            ) : (
              <Icon className={classes.count}>{countIcon}</Icon>
            ))}
          <Typography
            className={clsx({
              [classes.button]: !mobile,
              [classes.buttonColumn]: column,
              [classes.buttonMobile]: mobile,
              [classes.spaceAbove]: column,
            })}
            style={{ color: text.color }}
          >
            {text.name}
          </Typography>
        </Row>
      </ListItem>
    </div>
  );
}
