import React from 'react';
import { Typography, Icon } from '@material-ui/core';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { useStyles } from './styles';
import stripeLogo from '../../assets/stripe.png';
import { IconButton, Column } from '../';
import clsx from 'clsx';

export default function CheckoutForm({ paymentIntent, job }) {
  const classes = useStyles();
  const stripe = useStripe();
  const elements = useElements();
  const [status, setStatus] = React.useState({
    complete: false,
    errorMsg: '',
    error: null,
    success: false,
  });

  const handleSubmit = async (event) => {
    setStatus({
      complete: false,
      errorMsg: 'Sending Payment',
      error: false,
      success: false,
    });
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
      },
    });
    if (result.error) {
      setStatus({
        complete: false,
        error: true,
        errorMsg: result.error.message,
        success: false,
      });
    } else {
      if (result.paymentIntent.status === 'succeeded') {
        job.setJobData({
          ...job.jobData,
          activeContract: { ...job.jobData.activeContract, status: 'paid' },
        });
        setStatus({
          complete: false,
          error: false,
          errorMsg: 'Completed',
          success: true,
        });
      }
    }
  };

  return status.success ? (
    <div
      className={classes.row}
      style={{
        flexDirection: 'column',
        marginBottom: 20,
      }}
    >
      <Typography variant="h4" className={classes.notify}>
        Payment Received
      </Typography>
    </div>
  ) : (
    <Column>
      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <Column>
          <div className={classes.card}>
            <div
              className={classes.row}
              style={{
                marginBottom: 20,
                borderBottom: '1px dotted #ddd',
                paddingBottom: 20,
              }}
            >
              <img src={stripeLogo} style={{ width: 60 }} alt="Stripe Logo" />
              <div
                style={{ display: 'flex', alignItems: 'center' }}
                className={clsx({
                  [classes.noerror]: true,
                  [classes.error]: status.error,
                })}
              >
                {status.error ? (
                  <Typography style={{ display: 'flex', alignItems: 'center' }}>
                    <Icon style={{ marginRight: 10 }}>warning</Icon>
                    {status.errorMsg}
                  </Typography>
                ) : (
                  <Typography>
                    {status.errorMsg === ''
                      ? 'Please enter your card details'
                      : status.errorMsg}
                  </Typography>
                )}
              </div>
            </div>
            <CardElement
              onChange={(e) => {
                setStatus({
                  complete: e.complete,
                  errorMsg: e.error !== undefined ? e.error.message : null,
                  error: e.error !== undefined ? true : false,
                  success: false,
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
          </div>
          <IconButton
            onClickEvent={() => {}}
            disabled={!status.complete}
            title="Confirm Payment"
            color="primary"
            icon="payment"
            styleOverride={null}
            type="submit"
          />
        </Column>
      </form>
    </Column>
  );
}
