import React from 'react';
import { Typography, TextField, Card } from '@material-ui/core';
import { LoadIcon, IconButton, StripeCheckout, Payments } from '../';
import { PREVIEW_CONTRACT } from '../../data/queries';
import { MAKE_PAYMENT } from '../../data/mutations';
import { Query, Mutation } from 'react-apollo';
import { useStyles } from './styles';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE);

export default function ContractSummary({ contractData }) {
  const [loadingTwo, setLoading] = React.useState(false);
  const [paymentIntent, setPaymentIntent] = React.useState(null);
  const [amount, setAmount] = React.useState('0');
  const [showAmount, setShowAmount] = React.useState(false);
  const [showPayments, setShowPayments] = React.useState(false);
  console.log(contractData);
  let paymentTermsSum = 100;
  const classes = useStyles();
  return (
    <div style={{ width: '100%' }}>
      <div className={classes.wrapper}>
        <Typography variant="h6">
          <b>{`${contractData.cost}.00 ${contractData.currency} for ${contractData.job.name}`}</b>
        </Typography>
        <Typography variant="body1" style={{ marginTop: 10 }}>
          <b>Subject to the following payment terms:</b>
        </Typography>

        {contractData.paymentTerms.map((term, index) => {
          paymentTermsSum = paymentTermsSum - term.percent;
          return (
            <Typography variant="body1" key={`term_summary_${index}`}>
              {`${term.percent}% upon ${term.description}`}
            </Typography>
          );
        })}

        {paymentTermsSum > 0 && (
          <div className={classes.row}>
            <Typography variant="body1">
              {`${paymentTermsSum}% of the Payment upon completion of the Services`}
            </Typography>
          </div>
        )}

        <Typography variant="body1" style={{ marginTop: 10 }}>
          <b>Additional Notes:</b>
          <br />
          {contractData.notes ? ` ${contractData.notes}` : ` No Notes`}
        </Typography>
        <Typography variant="body1" style={{ marginTop: 10 }}>
          <b>Your Creative:</b>
        </Typography>
        <div className={classes.profileWrapper}>
          <img
            src={contractData.user.profileImg}
            className={classes.profileImg}
            alt=""
          />
          <div className={classes.profileWrapperDetails}>
            <Typography variant="h6">{contractData.user.name}</Typography>
            <Typography variant="body1">{contractData.user.summary}</Typography>
          </div>
        </div>
        <IconButton
          title={showPayments ? 'Minimise' : 'Show Payments'}
          icon="payment"
          disabled={false}
          color="secondary"
          styleOverride={null}
          type="button"
          onClickEvent={() =>
            showPayments ? setShowPayments(false) : setShowPayments(true)
          }
        />
        {showPayments && (
          <Card className={classes.root}>
            {showAmount ? (
              <Mutation
                mutation={MAKE_PAYMENT}
                variables={{
                  amount: `${parseInt(amount)}`,
                  currency: contractData.currency,
                  contractId: contractData.id,
                }}
                onCompleted={(response) => {
                  setLoading(false);
                  setPaymentIntent(response.makePayment);
                }}
              >
                {(mutation) => {
                  return (
                    <IconButton
                      disabled={false}
                      onClickEvent={() => {
                        setLoading(true);
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
            ) : (
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
                  onClickEvent={() => {
                    setShowAmount(true);
                  }}
                  title="Make Payment"
                  icon="payment"
                  color="secondary"
                  styleOverride={null}
                  type="button"
                />
              </div>
            )}
            {paymentIntent && (
              <Elements stripe={stripePromise}>
                <StripeCheckout
                  paymentIntent={paymentIntent}
                  setPaymentIntent={setPaymentIntent}
                />
              </Elements>
            )}
            <Payments data={contractData.payments} />
          </Card>
        )}
      </div>
    </div>
  );
}
