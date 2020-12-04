import React from 'react';
import { useStyles } from './styles';
import stripeLogo from '../../assets/stripe_logo_sm.png';
import dmDevice from '../../assets/dm_white.png';
import { Column, IconButton, Row, Divider } from '../../components';
import { Typography } from '@material-ui/core';

export default function StripeSuccess({ history, ...props }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.box}>
        <Column>
          <Row>
            <Typography variant="h4" style={{ color: '#fff' }}>
              Thanks for connecting
            </Typography>
            <img
              src={dmDevice}
              style={{ width: 240, marginLeft: 10, marginRight: 10 }}
              alt="DoodleMeeple Logo"
            />
            <Typography variant="h4" style={{ color: '#fff' }}>
              with
            </Typography>
            <img src={stripeLogo} style={{ width: 90 }} alt="Stripe Logo" />
          </Row>
          <Divider />
          <IconButton
            title="Home"
            icon="home"
            onClickEvent={() => history.push('/app/dashboard')}
          />
        </Column>
      </div>
    </div>
  );
}
