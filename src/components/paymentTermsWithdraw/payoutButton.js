import React, { useEffect } from 'react';
import { IconButton } from '../';
import { Mutation } from 'react-apollo';
import { REQUEST_WITHDRAW } from '../../data/mutations';

export default function PayoutButton({ paymentId, withdrawRequest }) {
  const [requested, setRequested] = React.useState(true);

  useEffect(() => {
    setRequested(withdrawRequest);
  }, [withdrawRequest]);

  return (
    <Mutation
      mutation={REQUEST_WITHDRAW}
      variables={{
        _id: paymentId,
      }}
    >
      {(mutation) => {
        return (
          <IconButton
            title={!requested ? 'Request Payout' : 'Requested'}
            icon=""
            onClickEvent={() => {
              setRequested(true);
              mutation();
            }}
            styleOverride={{ margin: 0, marginLeft: 'auto' }}
            disabled={requested}
          />
        );
      }}
    </Mutation>
  );
}
