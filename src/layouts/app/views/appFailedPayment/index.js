import React from 'react';
import { useStyles } from './styles';
import { Card, CardContent, Typography, Slide } from '@material-ui/core';
import { Column, FieldTitleDashboard, Divider } from '../../../../components';

export default function AppFailedPayment({ history }) {
  const classes = useStyles();

  return (
    <Slide
      direction="left"
      in={true}
      mountOnEnter
      unmountOnExit
      style={{ width: 700 }}
    >
      <Card className={classes.card}>
        <CardContent>
          <Column j="center" a="center">
            <FieldTitleDashboard
              name="Payment Transfer Failed"
              inline={false}
              a="c"
            />
            <Divider />
            <Typography>
              It seems your client had trouble transferring a payment to your
              STRIPE account, not to worry we have records of all transactions
              through the site and will get to the bottom of the issue.
            </Typography>
            <Divider />
            <Typography>
              Before we take a look we want to make sure that your DoodleMeeple
              account is correctly connected to Stripe.
            </Typography>
            <Divider />
            <Typography>We'll be in touch soon</Typography>
          </Column>
        </CardContent>
      </Card>
    </Slide>
  );
}
