import React, { useEffect } from 'react';
import { Typography } from '@material-ui/core';
import {
  IconButton,
  StripeCheckout,
  FieldTitleDashboard,
  Meta,
  Column,
  Divider,
  BorderBox,
  LoadIcon,
} from '../';
import { Mutation } from 'react-apollo';
import { useStyles } from './styles';
import { MAKE_PAYMENT } from '../../data/mutations';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import clsx from 'clsx';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE);

export default function PaymentElement({ display, job, ...props }) {
  const classes = useStyles();
  const [paymentIntent, setPaymentIntent] = React.useState(null);
  const [visible, setVisible] = React.useState(null);
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [tabNbr, setTabNbr] = React.useState(0);
  const contractData = job.jobData.activeContract;
  const { setDisplayPayment } = props;
  useEffect(() => {
    setVisible(display);
  }, [job, display]);

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
        {tabNbr === 0 && (
          <Column>
            <FieldTitleDashboard name="DEPOSIT PAYMENT" inline={false} a="c" />
            <div>
              <Divider />
              <BorderBox>
                <Typography variant="body1">{`You have agreed to pay:`}</Typography>
                <Typography variant="h5">{`${
                  parseInt(contractData.cost) +
                  parseInt(contractData.cost) * 0.1
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
                          setTabNbr(1);
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
              </BorderBox>
            </div>
            <Divider />
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
            ></Meta>{' '}
            <IconButton
              disabled={buttonDisabled}
              onClickEvent={() => {
                setDisplayPayment(false);
                setButtonDisabled(false);
                setTabNbr(0);
              }}
              title="Close"
              icon=""
              color="text-dark"
              styleOverride={null}
              type="button"
            />
          </Column>
        )}
        {tabNbr === 1 && (
          <Column>
            <FieldTitleDashboard name="CARD PAYMENT" inline={false} a="c" />
            {!paymentIntent && <LoadIcon />}
            {paymentIntent && (
              <Elements stripe={stripePromise}>
                <StripeCheckout
                  paymentIntent={paymentIntent}
                  job={{ jobData: job.jobData, setJobData: job.setJobData }}
                  onClickEvent={() => {
                    setDisplayPayment(false);
                  }}
                />
              </Elements>
            )}
            {/*  <Payments data={contractData.payments} />*/}
            <IconButton
              disabled={false}
              onClickEvent={() => {
                setTabNbr(0);
                setDisplayPayment(false);
                setButtonDisabled(false);
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
