import React, { useEffect } from 'react';
import { Typography } from '@material-ui/core';
import {
  IconButton,
  StripeCheckout,
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

export default function PaymentElement({
  display,
  contractData,
  setDisplayPayment,
  setContractStatus,
}) {
  const classes = useStyles();
  const [paymentIntent, setPaymentIntent] = React.useState(null);
  const [visible, setVisible] = React.useState(null);
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [paymentStatus, setPaymentStatus] = React.useState('');

  useEffect(() => {
    setVisible(display);
    setPaymentStatus(contractData.status);
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
        {
          <Column>
            <FieldTitleDashboard name="DEPOSIT PAYMENT" inline={false} a="c" />
            <Meta str="The full amount must be deposited into the DoodleMeeple holding account before work can progress" />
            <Meta
              str={
                <span>
                  Please refer to the DoodleMeeple{' '}
                  <a href="https://doodlemeeple.com/terms-of-service/">
                    Terms of Service
                  </a>
                </span>
              }
            ></Meta>

            <div>
              <Divider />
              <Typography variant="h6">{`You have agreed to pay:`}</Typography>
              <Typography variant="h5">{`${
                parseInt(contractData.cost) + parseInt(contractData.cost) * 0.1
              } ${contractData.currency}`}</Typography>
              <Divider />
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
                        setPaymentStatus('stripe');
                        setButtonDisabled(true);
                        mutation();
                      }}
                      title="Deposit Now"
                      icon="payment"
                      color="primary"
                      styleOverride={{ margin: 'auto' }}
                      type="button"
                    />
                  );
                }}
              </Mutation>
            </div>
            <IconButton
              disabled={buttonDisabled}
              onClickEvent={() => {
                setDisplayPayment(false);
              }}
              title="Close"
              icon=""
              color="text-dark"
              styleOverride={null}
              type="button"
            />
          </Column>
        }
        {paymentStatus === 'stripe' && (
          <Column>
            <FieldTitleDashboard name="CARD PAYMENT" inline={false} a="c" />
            <Meta str="Stripe is our chosen payment provider, you can use any major credit or debit card to make a payment" />
            {paymentIntent && (
              <Elements stripe={stripePromise}>
                <StripeCheckout
                  paymentIntent={paymentIntent}
                  setPaymentStatus={setPaymentStatus}
                  setVisible={setDisplayPayment}
                  setContractStatus={setContractStatus}
                />
              </Elements>
            )}
            {/*  <Payments data={contractData.payments} />*/}
            <IconButton
              disabled={false}
              onClickEvent={() => {
                setDisplayPayment(false);
              }}
              title="Close"
              icon=""
              color="text-dark"
              styleOverride={null}
              type="button"
            />
          </Column>
        )}
      </div>
    </div>
  );
}
