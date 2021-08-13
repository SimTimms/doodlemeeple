import React from 'react';
import {
  Typography,
  Icon,
  Card,
  Slide,
  useMediaQuery,
} from '@material-ui/core';
import { useStyles } from './styles';
import { Row } from '../';
import clsx from 'clsx';

export default function CardComponent({ children, ...props }) {
  const { styleOverride, onClickEvent, locked, lockedMsg, type } = props;
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
