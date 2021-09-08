import React from 'react';
import { useStyles } from './styles';
import { Typography } from '@material-ui/core';
import { Row, Column, DividerMini, Divider, MenuButtonCircle } from '../';
import clsx from 'clsx';

export default function SubTitle({
  title,
  menuStr,
  primaryButton,
  short,
  onClickEvent,
}) {
  const classes = useStyles();

  return (
    <Column w="100%">
      <Divider />
      <Row j="space-between" a="center" w="100%">
        <Row
          j="space-between"
          a="center"
          className={clsx({
            [classes.subTitle]: true,
            [classes.subTitleShort]: short,
          })}
        >
          <Typography
            className={clsx({
              [classes.subTitleText]: true,
              [classes.subTitleTextShort]: short,
            })}
          >
            {title}
          </Typography>
          {primaryButton && (
            <MenuButtonCircle
              icon={primaryButton.icon}
              onClickEvent={primaryButton.onClickEvent}
            />
          )}
        </Row>
        {menuStr && (
          <Typography
            className={classes.menuStr}
            onClick={() => onClickEvent()}
          >
            {menuStr}
          </Typography>
        )}
      </Row>
      <DividerMini />
    </Column>
  );
}
