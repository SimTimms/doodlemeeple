import React from 'react';
import { IconButton } from '../../../../../../../../../components';
import { Mutation } from 'react-apollo';
import { toaster } from '../../../../../../../../../utils/toaster';
import {
  UPDATE_CONTRACT,
  SUBMIT_CONTRACT,
} from '../../../../../../../../../data/mutations';

export function EditButton({ contract, jobId, setContract }) {
  return (
    <Mutation
      mutation={UPDATE_CONTRACT}
      variables={{
        _id: contract._id,
        notes: contract.notes,
        deadline: contract.deadline,
        currency: contract.currency,
        cost: contract.cost,
        jobId,
        status: '',
      }}
      onCompleted={(data) => {
        toaster('Editing');
        setContract({ ...contract, status: '' });
      }}
    >
      {(mutation) => {
        return (
          <IconButton
            title="Edit Proposal"
            icon="edit"
            styleOverride={null}
            color="secondary"
            disabled={false}
            onClickEvent={() => {
              mutation();
            }}
            type="button"
            iconPos="right"
          />
        );
      }}
    </Mutation>
  );
}

export function SubmitButton({ contract, jobId, setContract }) {
  return (
    <Mutation
      mutation={SUBMIT_CONTRACT}
      variables={{
        _id: contract._id,
      }}
      onCompleted={(data) => {
        toaster('Submitting...');
        setContract({ ...contract, status: 'submitted' });
      }}
    >
      {(mutation) => {
        return (
          <IconButton
            title="Submit Proposal"
            icon="send"
            styleOverride={null}
            color="primary"
            disabled={false}
            onClickEvent={() => {
              mutation();
            }}
            type="button"
            iconPos="right"
          />
        );
      }}
    </Mutation>
  );
}
