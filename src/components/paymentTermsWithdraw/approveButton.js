import React, { useEffect } from 'react';
import { IconButton } from '../';
import { Typography } from '@material-ui/core';

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
          ? setResponse('stripe_required')
          : data.approveWithdraw === 'GREATER_ZERO'
          ? setResponse('greater_zero')
          : data.approveWithdraw === 'zero_account'
          ? setResponse('zero_account')
          : setResponse('Paid Out');
      }}
    >
      {(mutation) => {
        return response == 'zero_account' ? (
          <Typography>
            DoodleMeeple was unable to automatically transfer this payment,
            technicians have been notified and will make the transfer manually
            in a few minutes. Contact tech@doodlemeeple.com for details.
          </Typography>
        ) : response == 'greater_zero' ? (
          <Typography>
            STRIPE cannot process payments of 0.00, please contact
            tech@doodlemeeple.com for details
          </Typography>
        ) : response == 'stripe_required' ? (
          <Typography>
            There is an issue with the Creative's STRIPE account. They have been
            notified. Please try again later.
          </Typography>
        ) : (
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
