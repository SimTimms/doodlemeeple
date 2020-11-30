import React from 'react';
import { Slide } from '@material-ui/core';
import { useStyles } from './styles';
import { Mutation } from 'react-apollo';
import { CONNECT_STRIPE } from '../../../../data/mutations';
import { IconButton, Column, LoadIcon } from '../../../../components';
import { friendlyGraphQLError } from '../../../../utils/readableErrors';
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
          {stripeError}
          {loading && <LoadIcon />}
          {connected && 'Connected'}
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
                  <IconButton
                    title="Confirm I want to connect"
                    onClickEvent={() => {
                      setLoading(true);
                      mutation();
                    }}
                  />
                );
              }}
            </Mutation>
          )}
          {stripeError}
        </Column>
      </div>
    </Slide>
  );
}
