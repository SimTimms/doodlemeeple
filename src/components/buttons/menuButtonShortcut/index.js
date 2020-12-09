import React from 'react';
import { ListItem, Icon, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import clsx from 'clsx';
import { Row } from '../../';

export default function MenuButtonShortcut({ text, ...props }) {
  const classes = useStyles();
  const {
    column,
    countIcon,
    href,
    onClickEvent,
    active,
    imageIcon,
    noPad,
  } = props;

  return (
    <a
      href={href ? href : null}
      className={classes.link}
      onClick={() => {
        onClickEvent && onClickEvent();
      }}
      target="_blank"
      rel="noopener noreferrer"
    >
      <ListItem
        button
        style={{
          paddingLeft: noPad ? 0 : 10,
          paddingRight: noPad ? 0 : 10,
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
            [classes.iconButton]: !imageIcon,
            [classes.iconButtonImage]: imageIcon,
            [classes.iconIconColumn]: column,
            [classes.iconButtonOnly]: text.name === '',
          })}
        >
          {!text.icon ? (
            <img
              src={imageIcon}
              className={clsx({
                [classes.iconImage]: true,
                [classes.iconIconNoMargin]: text.name === '',
              })}
              style={{ color: text.color }}
            />
          ) : (
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
          )}
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
              [classes.button]: true,
              [classes.buttonColumn]: column,
              [classes.spaceAbove]: column,
            })}
            style={{ color: text.color }}
          >
            {text.name}
          </Typography>
        </Row>
      </ListItem>
    </a>
  );
}
