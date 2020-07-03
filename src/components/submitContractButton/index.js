import React from 'react';
import { IconButton } from '../';
import { Mutation } from 'react-apollo';
import { toaster } from '../../utils/toaster';
import { SUBMIT_CONTRACT } from '../../data/mutations';

export default function SubmitContractButton({ contract, jobId, setContract }) {
  return (
    <Mutation
      mutation={SUBMIT_CONTRACT}
      variables={{
        id: contract.id,
      }}
      onCompleted={(data) => {
        setContract({ ...contract, status: 'submitted' });
        toaster('Sent...');
      }}
    >
      {(mutation) => {
        return (
          <IconButton
            title="Send Quote"
            icon="send"
            styleOverride={{ width: '100%' }}
            color="primary"
            disabled={false}
            onClickEvent={() => {
              toaster('Sending...');
              mutation();
            }}
            iconPos="right"
            type="button"
          />
        );
      }}
    </Mutation>
  );
}
