import React, { useEffect } from 'react';
import { IconButton } from '../';
import { Mutation } from 'react-apollo';
import { APPROVE_WITHDRAW } from '../../data/mutations';

export default function ApproveButton({ paymentId, withdrawApproved }) {
  const [requested, setRequested] = React.useState(true);

  useEffect(() => {
    setRequested(withdrawApproved);
  }, [withdrawApproved]);

  return (
    <Mutation
      mutation={APPROVE_WITHDRAW}
      variables={{
        _id: paymentId,
      }}
    >
      {(mutation) => {
        return (
          <IconButton
            title="Approve"
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
