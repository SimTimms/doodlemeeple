import React from 'react';
import { Typography, Icon, Card, useMediaQuery } from '@material-ui/core';
import { useStyles } from './styles';
import { Row, Column, DividerWithBorder } from '../';
import clsx from 'clsx';

export default function CardComponent({ children, ...props }) {
  const { styleOverride, onClickEvent, locked, lockedMsg, type, premiumId } =
    props;
  const classes = useStyles();
  const mobile = useMediaQuery('(max-width:800px)');
  return (
    <Card
      className={clsx({
        [classes.card]: true,
        [classes.clickable]: onClickEvent,
        [classes.cardLocked]: locked,
        [classes.cardMobile]: mobile,
        [classes.dark]: type === 'dark',
        [classes.premium]: type === 'premium',
      })}
      style={styleOverride && styleOverride}
      onClick={() => (onClickEvent ? onClickEvent() : () => {})}
    >
      {!locked ? (
        <Column direction="left" in={true} mountOnEnter unmountOnExit>
          {type === 'premium' && (
            <Column>
              <Row a="center" j="space-between" w="100%">
                <Typography>{premiumId}</Typography>
                <Typography>Premium</Typography>
              </Row>
              <DividerWithBorder />
            </Column>
          )}
          <div style={{ width: '100%' }}>{children}</div>
        </Column>
      ) : (
        <Row>
          <Icon className={classes.locked}>lock</Icon>
          <Typography
            align="center"
            className={clsx({
              [classes.cardTitle]: true,
              [classes.cardTitleLocked]: locked,
            })}
          >
            {lockedMsg ? lockedMsg : 'Locked'}
          </Typography>
        </Row>
      )}
    </Card>
  );
}
