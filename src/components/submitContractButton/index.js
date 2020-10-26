import React from 'react';
import { IconButton } from '../';
import { Mutation } from 'react-apollo';
import { toaster } from '../../utils/toaster';
import { SUBMIT_CONTRACT } from '../../data/mutations';

export default function SubmitContractButton({
  contract,
  setTabNbr,
  setContract,
}) {
  return (
    <Mutation
      mutation={SUBMIT_CONTRACT}
      variables={{
        _id: contract._id,
      }}
      onCompleted={(data) => {
        setContract({ ...contract, status: 'submitted' });
        toaster('Submitted...');
        setTabNbr(0);
      }}
    >
      {(mutation) => {
        return (
          <IconButton
            title={`Submit`}
            icon="send"
            styleOverride={{ width: '100%' }}
            color="primary"
            onClickEvent={() => {
              toaster('Sending...');
              mutation();
            }}
          />
        );
      }}
    </Mutation>
  );
}
