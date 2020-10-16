import React, { useEffect } from 'react';
import { IconButton } from '../';
import { Mutation } from 'react-apollo';
import { APPROVE_WITHDRAW } from '../../data/mutations';

export default function ApproveButton({
  paymentId,
  withdrawApproved,
  ...props
}) {
  const [requested, setRequested] = React.useState(true);
  const [response, setResponse] = React.useState('');
  const { title } = props;
  useEffect(() => {
    setRequested(withdrawApproved);
  }, [withdrawApproved]);

  return (
    <Mutation
      mutation={APPROVE_WITHDRAW}
      variables={{
        _id: paymentId,
      }}
      onCompleted={(data) => {
        data.approveWithdraw === 'STRIPE SETUP'
          ? setResponse('Stripe Required')
          : setResponse('Paid Out');
      }}
    >
      {(mutation) => {
        return (
          <IconButton
            title={response ? response : title ? title : 'Approve'}
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
