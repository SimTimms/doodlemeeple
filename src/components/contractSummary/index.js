import React from 'react';
import { Typography } from '@material-ui/core';
import { LoadIcon, IconButton, StripeCheckout } from '../';
import { PREVIEW_CONTRACT } from '../../data/queries';
import { MAKE_PAYMENT } from '../../data/mutations';
import { Query, Mutation } from 'react-apollo';
import { useStyles } from './styles';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_xjjTUtg7riy4i2F9NYvuSkmF00fMcYOlZk');

export default function ContractSummary({ contractId }) {
  const [openStripe, setOpenStripe] = React.useState(false);
  const [stripeItem, setStripeItem] = React.useState('');
  const [loadingTwo, setLoading] = React.useState(false);
  const [paymentIntent, setPaymentIntent] = React.useState(null);

  let paymentTermsSum = 100;
  const classes = useStyles();
  return (
    <Query
      query={PREVIEW_CONTRACT}
      variables={{ contractId }}
      fetchPolicy="network-only"
    >
      {({ loading, data }) => {
        const contractData = data && data.previewContract;

        return loading || loadingTwo ? (
          <LoadIcon />
        ) : (
          data && (
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
                  <div>
                    <Typography variant="body1" key={`term_summary_${index}`}>
                      {`${term.percent}% upon ${term.description}`}
                    </Typography>
                    <IconButton
                      disabled={false}
                      onClickEvent={() => {}}
                      title="Pay"
                      icon="yes"
                      color="primary"
                      styleOverride={null}
                    />
                  </div>
                );
              })}

              {paymentTermsSum > 0 && (
                <div className={classes.row}>
                  <Typography variant="body1">
                    {`${paymentTermsSum}% of the Payment upon completion of the Services`}
                  </Typography>
                  <Mutation
                    mutation={MAKE_PAYMENT}
                    variables={{
                      amount: '0.30',
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
                            setStripeItem(
                              `${paymentTermsSum}% of the Payment upon completion of the Services`,
                            );
                            setOpenStripe(true);
                          }}
                          title="Pay"
                          icon="payment"
                          color="secondary"
                          styleOverride={null}
                        />
                      );
                    }}
                  </Mutation>
                </div>
              )}
              {openStripe && (
                <Elements stripe={stripePromise}>
                  <StripeCheckout paymentIntent={paymentIntent} />
                </Elements>
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
                  src={data.previewContract.user.profileImg}
                  className={classes.profileImg}
                />
                <div className={classes.profileWrapperDetails}>
                  <Typography variant="h6">
                    {data.previewContract.user.name}
                  </Typography>
                  <Typography variant="body1">
                    {data.previewContract.user.summary}
                  </Typography>
                </div>
              </div>
            </div>
          )
        );
      }}
    </Query>
  );
}
