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
        id: contract.id,
        contract: {
          notes: contract.notes,
          deadline: contract.deadline,
          currency: contract.currency,
          cost: parseInt(contract.cost),
          jobId,
          status: '',
        },
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
            styleOverride={null}
            color="secondary"
            disabled={false}
            onClickEvent={() => {
              mutation();
            }}
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
    />
  );
}
