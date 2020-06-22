import React from 'react';
import { Typography, Icon } from '@material-ui/core';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { useStyles } from './styles';
import stripeLogo from '../../assets/stripe.png';
import { IconButton } from '../';
import clsx from 'clsx';

export default function CheckoutForm({ paymentIntent }) {
  const classes = useStyles();
  const stripe = useStripe();
  const elements = useElements();
  const [status, setStatus] = React.useState({
    complete: false,
    error: null,
  });

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const result = await stripe.confirmCardPayment(paymentIntent, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: 'Jenny Rosen',
        },
      },
    });

    if (result.error) {
      // Show error to your customer (e.g., insufficient funds)
      console.log(result.error.message);
    } else {
      console.log(result);
      // The payment has been processed!
      if (result.paymentIntent.status === 'succeeded') {
        // Show a success message to your customer
        // There's a risk of the customer closing the window before callback
        // execution. Set up a webhook or plugin to listen for the
        // payment_intent.succeeded event that handles any business critical
        // post-payment actions.
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className={classes.card}>
      <div
        className={classes.row}
        style={{
          marginBottom: 20,
          borderBottom: '1px dotted #ddd',
          paddingBottom: 20,
        }}
      >
        <img src={stripeLogo} style={{ width: 60 }} />
        <div
          style={{ display: 'flex', alignItems: 'center' }}
          className={clsx({
            [classes.noerror]: true,
            [classes.error]: status.error !== null,
          })}
        >
          {status.error ? (
            <Typography style={{ display: 'flex', alignItems: 'center' }}>
              <Icon style={{ marginRight: 10 }}>warning</Icon>
              {status.error}
            </Typography>
          ) : (
            <Typography>Please enter your card details</Typography>
          )}
        </div>
      </div>
      <CardElement
        onChange={(e) => {
          console.log(e);
          setStatus({
            complete: e.complete,
            error: e.error !== undefined ? e.error.message : null,
          });
        }}
        options={{
          style: {
            base: {
              fontSize: '20px',
              color: '#222',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <div
        className={classes.row}
        style={{
          borderTop: '1px dotted #ddd',
          marginTop: 20,
        }}
      >
        <IconButton
          onClickEvent={() => {}}
          disabled={!status.complete}
          title="Confirm Payment"
          color="warning"
          icon="payment"
          styleOverride={null}
          type="submit"
        />
      </div>
    </form>
  );
}
