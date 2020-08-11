import React from 'react';
import { IconButton } from '../';
import { Mutation } from 'react-apollo';
import { toaster } from '../../utils/toaster';
import { UPDATE_CONTRACT } from '../../data/mutations';

export default function EditContractButton({
  contract,
  jobId,
  setContract,
  title,
}) {
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
            title={title}
            icon="edit"
            styleOverride={{ width: '100%' }}
            color="secondary"
            disabled={false}
            onClickEvent={() => {
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

export function ViewButton({ history, contractId }) {
  return (
    <IconButton
      title="View"
      icon="view"
      styleOverride={null}
      color="primary"
      disabled={false}
      onClickEvent={() => {
        history.push(`/app/view-contract/${contractId}`);
      }}
      iconPos="right"
      type="button"
    />
  );
}
