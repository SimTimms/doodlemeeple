import React from 'react';
import { IconButton } from '../';
import { Mutation } from 'react-apollo';
import { toaster } from '../../utils/toaster';
import { SUBMIT_CONTRACT } from '../../data/mutations';
import { UnlockInfo } from '../../components';

export default function SubmitContractButton({ contract, history }) {
  return (
    <Mutation
      mutation={SUBMIT_CONTRACT}
      variables={{
        _id: contract._id,
      }}
      onCompleted={(data) => {
        toaster('Sent...');
        history.push(`/app/view-proposal/${contract.job._id}`);
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
