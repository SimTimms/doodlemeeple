import React, { useEffect } from 'react';
import { Typography } from '@material-ui/core';
import {
  IconButton,
  StripeCheckout,
  Payments,
  FieldTitleDashboard,
  Meta,
  Column,
  Divider,
} from '../';
import { Mutation } from 'react-apollo';
import { useStyles } from './styles';
import { MAKE_PAYMENT } from '../../data/mutations';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import clsx from 'clsx';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE);

export default function PaymentElement({ display, contractData }) {
  const classes = useStyles();
  const [amount, setAmount] = React.useState('0');
  const [paymentIntent, setPaymentIntent] = React.useState(null);
  const [visible, setVisible] = React.useState(null);
  const [buttonDisabled, setButtonDisabled] = React.useState(false);

  useEffect(() => {
    setAmount(contractData.cost);
    setVisible(display);
  }, [contractData, display]);

  return (
    <div
      className={clsx({
        [classes.fixed]: true,
        [classes.hide]: !visible,
      })}
    >
      <div
        className={clsx({
          [classes.wrapper]: true,
        })}
      >
        <Column>
          <FieldTitleDashboard name="DEPOSIT PAYMENT" inline={false} a="c" />
          <Meta str="The full amount must be deposited into the DoodleMeeple holding account before work can progress" />
          <Meta
            str={
              <span>
                Please refer to your{' '}
                <span
                  style={{ textDecoration: 'underline', cursor: 'pointer' }}
                  onClick={() => {
                    setVisible(false);
                  }}
                >
                  Contract
                </span>{' '}
                & our{' '}
                <a href="https://doodlemeeple.com/terms-of-service/">
                  Terms of Service
                </a>
              </span>
            }
          ></Meta>
        </Column>
        <Column>
          <div>
            <Divider />
            <Typography variant="h6">{`You have agreed to pay:`}</Typography>
            <Typography variant="h5">{`${contractData.cost} ${contractData.currency}`}</Typography>
            <Mutation
              mutation={MAKE_PAYMENT}
              variables={{
                contractId: contractData._id,
              }}
              onCompleted={(response) => {
                setPaymentIntent(response.makePayment);
              }}
            >
              {(mutation) => {
                return (
                  <IconButton
                    disabled={buttonDisabled}
                    onClickEvent={() => {
                      setButtonDisabled(true);
                      mutation();
                    }}
                    title="Deposit Now"
                    icon="payment"
                    color="secondary"
                    styleOverride={null}
                    type="button"
                  />
                );
              }}
            </Mutation>
          </div>
          {paymentIntent && (
            <Elements stripe={stripePromise}>
              <StripeCheckout
                paymentIntent={paymentIntent}
                setPaymentIntent={setPaymentIntent}
              />
            </Elements>
          )}
          {/*  <Payments data={contractData.payments} />*/}
        </Column>
      </div>
    </div>
  );
}
