import React from 'react';
import { Typography, Icon, Card, Slide } from '@material-ui/core';
import { useStyles } from './styles';
import { Row } from '../';
import clsx from 'clsx';

export default function CardComponent({ children, ...props }) {
  const { styleOverride, onClickEvent, locked, lockedMsg } = props;
  const classes = useStyles();

  return (
    <Card
      className={clsx({
        [classes.card]: true,
        [classes.clickable]: onClickEvent,
        [classes.cardLocked]: locked,
      })}
      style={styleOverride && styleOverride}
      onClick={() => (onClickEvent ? onClickEvent() : () => {})}
    >
      {!locked ? (
        <Slide direction="left" in={true} mountOnEnter unmountOnExit>
          <div style={{ width: '100%' }}>{children}</div>
        </Slide>
      ) : (
        <Row>
          <Icon className={classes.locked}>lock</Icon>
          <Typography align="center" style={{ width: '100%' }}>
            {lockedMsg ? lockedMsg : 'Locked'}
          </Typography>
        </Row>
      )}
    </Card>
  );
}
