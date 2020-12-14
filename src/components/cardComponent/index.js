import React from 'react';
import { Typography, Icon, Card } from '@material-ui/core';
import { useStyles } from './styles';
import { Row } from '../';
import clsx from 'clsx';

export default function CardComponent({ children, ...props }) {
  const { styleOverride, onClickEvent, locked } = props;
  const classes = useStyles();

  return (
    <Card
      className={clsx({
        [classes.card]: true,
        [classes.clickable]: onClickEvent,
        [classes.locked]: locked,
      })}
      style={styleOverride && styleOverride}
      onClick={() => (onClickEvent ? onClickEvent() : () => {})}
    >
      {!locked ? (
        children
      ) : (
        <Row>
          <Icon>lock</Icon>
          <Typography align="center" style={{ width: '100%' }}>
            Locked
          </Typography>
          <Icon>lock</Icon>
        </Row>
      )}
    </Card>
  );
}
