import React from 'react';
import { ListItem, Icon, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import clsx from 'clsx';
import { Row } from '../../';
import MenuButtonIcon from './MenuButtonIcon';
import MenuButtonImage from './MenuButtonImage';

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
    title,
    iconPos,
    styleOverride,
    disabled,
    count,
  } = props;
  const isLeft = !iconPos || iconPos === 'left';

  return (
    <a
      href={href ? href : null}
      className={classes.link}
      onClick={() => {
        onClickEvent && onClickEvent();
      }}
      target="_blank"
      rel="noopener noreferrer"
      title={title && title}
      style={styleOverride && styleOverride}
    >
      <ListItem
        button
        style={{
          paddingLeft: noPad ? 0 : 10,
          paddingRight: noPad ? 0 : 10,
        }}
        className={clsx({
          [classes.buttonRoot]: true,
          [classes.buttonRootColumn]: column,
          [classes.disabled]: disabled,
        })}
      >
        <Row>
          {isLeft && imageIcon ? (
            <MenuButtonImage imageIcon={imageIcon} text={text} />
          ) : (
            isLeft &&
            text.icon && <MenuButtonIcon text={text} active={active} />
          )}
          {text.count > 0 &&
            (!countIcon ? (
              <Icon className={classes.count}>star</Icon>
            ) : (
              <Icon className={classes.count}>{countIcon}</Icon>
            ))}
        </Row>
        <Row j={'center'} w="100%">
          <Typography
            className={clsx({
              [classes.buttonText]: true,
              [classes.buttonColumn]: column,
            })}
          >
            {text.name}
          </Typography>
        </Row>
        {!isLeft && imageIcon ? (
          <MenuButtonImage imageIcon={imageIcon} text={text} />
        ) : (
          !isLeft && text.icon && <MenuButtonIcon text={text} />
        )}
      </ListItem>
    </a>
  );
}
