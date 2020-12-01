import React from 'react';
import { Slide, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import { Mutation } from 'react-apollo';
import { CONNECT_STRIPE } from '../../../../data/mutations';
import {
  IconButton,
  Column,
  LoadIcon,
  Divider,
  BorderBox,
  Meta,
} from '../../../../components';
import { friendlyGraphQLError } from '../../../../utils/readableErrors';
import stripeButton from '../../../../assets/stripe_button.png';

export function StripeConnect({ history, searchValues }) {
  const [stripeError, setStripeError] = React.useState('');
  const [connected, setConnected] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const classes = useStyles();
  const searchArr = searchValues.split('&');
  let searchObj = {};
  for (let i = 0; i < searchArr.length; i++) {
    searchObj[searchArr[i].split('=')[0]] = searchArr[i].split('=')[1];
  }

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <Column>
          <Divider />
          <BorderBox>
            <Typography variant="h5" align="center">
              Confirmation
            </Typography>
            <Divider />
            <Typography align="center">
              Awesome! We're nearly done, we've got your Stripe account details
              and just need your confirmation to confirm the link with
              DoodleMeeple
            </Typography>
            <Divider />
            <Meta
              str=" You can disconnect your account at any time by visiting your
              Account page or from your Stripe dashboard."
              align="center"
            />

            <Divider />
            {<Typography align="center">{stripeError}</Typography>}
            {loading && <LoadIcon />}
            {connected && <Typography align="center">Connected!</Typography>}
            {!connected && !loading && (
              <Mutation
                mutation={CONNECT_STRIPE}
                variables={{
                  token: searchObj.code,
                }}
                onCompleted={(data) => {
                  setConnected(true);
                  setLoading(false);
                }}
                onError={(error) => {
                  setStripeError(friendlyGraphQLError(error));
                  setLoading(false);
                }}
              >
                {(mutation) => {
                  return (
                    <Column>
                      <IconButton
                        title="Yes, I want to connect"
                        onClickEvent={() => {
                          setLoading(true);
                          mutation();
                        }}
                        icon="check"
                      />

                      <IconButton
                        title="No Thanks, I've changed my mind"
                        onClickEvent={() => {
                          history.push('/app/account');
                        }}
                        color="text-dark"
                        icon=""
                      />
                    </Column>
                  );
                }}
              </Mutation>
            )}
          </BorderBox>
        </Column>
      </div>
    </Slide>
  );
}
