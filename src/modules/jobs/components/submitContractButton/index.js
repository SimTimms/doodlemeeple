import React from 'react';
import { IconButton } from '../';
import { useMutation } from '@apollo/client';

import { toaster } from '../../utils/toaster';
import { SUBMIT_CONTRACT } from '../../data/mutations';

export default function SubmitContractButton({
  contract,
  setTabNbr,
  setContract,
}) {
  const [mutation, { loading }] = useMutation(
    SUBMIT_CONTRACT,
    {
      variables: { _id: contract._id },
    },
    {
      onCompleted() {
        setContract({ ...contract, status: 'submitted' });
        toaster('Submitted...');
        setTabNbr(0);
      },
    }
  );
  return (
    <IconButton
      title={`I Agree`}
      icon="send"
      styleOverride={{ width: '100%' }}
      color="primary"
      onClickEvent={() => {
        toaster('Sending...');
        mutation();
      }}
    />
  );
}
