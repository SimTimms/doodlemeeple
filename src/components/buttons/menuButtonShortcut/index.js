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
        })}
      >
        {isLeft && imageIcon ? (
          <MenuButtonImage imageIcon={imageIcon} text={text} />
        ) : (
          isLeft && <MenuButtonIcon text={text} />
        )}
        <Row
          j={
            text.count > 0 ? 'space-between' : column ? 'center' : 'flex-start'
          }
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
              [classes.buttonText]: true,
              [classes.buttonColumn]: column,
              [classes.iconTextOnlyButton]: !text.icon && !imageIcon,
              [classes.dark]: text.color === 'light',
            })}
          >
            {text.name}
          </Typography>
        </Row>
        {!isLeft && imageIcon ? (
          <MenuButtonImage imageIcon={imageIcon} text={text} />
        ) : (
          !isLeft && <MenuButtonIcon text={text} />
        )}
      </ListItem>
    </a>
  );
}
