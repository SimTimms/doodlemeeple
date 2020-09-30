import React from 'react';
import { TextField } from '@material-ui/core';
import {
  IconButton,
  StripeCheckout,
  Payments,
} from '../../../../../../components';
import { Mutation } from 'react-apollo';
import { useStyles } from './styles';
import { MAKE_PAYMENT } from '../../../../../../data/mutations';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import clsx from 'clsx';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE);

export default function PaymentElement({ display, contractData }) {
  const classes = useStyles();
  const [amount, setAmount] = React.useState('0');
  const [paymentIntent, setPaymentIntent] = React.useState(null);

  return (
    <div
      className={clsx({
        [classes.wrapper]: true,
        [classes.hide]: !display,
      })}
    >
      <Mutation
        mutation={MAKE_PAYMENT}
        variables={{
          amount: `${parseInt(amount)}`,
          currency: contractData.currency,
          contractId: contractData.id,
        }}
        onCompleted={(response) => {
          setPaymentIntent(response.makePayment);
        }}
      >
        {(mutation) => {
          return (
            <IconButton
              disabled={false}
              onClickEvent={() => {
                mutation();
              }}
              title="Send Payment"
              icon="payment"
              color="secondary"
              styleOverride={null}
              type="button"
            />
          );
        }}
      </Mutation>
      <div>
        <TextField
          id={'summary'}
          label={`Amount ${amount ? `(${24 - amount.length})` : ''}`}
          inputProps={{ maxLength: 24 }}
          type="text"
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value.replace(/[^0-9]/g, ''));
          }}
          margin="normal"
          variant="outlined"
          style={{ width: '100%' }}
        />
        <IconButton
          disabled={false}
          onClickEvent={() => {}}
          title="Make Payment"
          icon="payment"
          color="secondary"
          styleOverride={null}
          type="button"
        />
      </div>

      {paymentIntent && (
        <Elements stripe={stripePromise}>
          <StripeCheckout
            paymentIntent={paymentIntent}
            setPaymentIntent={setPaymentIntent}
          />
        </Elements>
      )}
      <Payments data={contractData.payments} type="creative" />
    </div>
  );
}
