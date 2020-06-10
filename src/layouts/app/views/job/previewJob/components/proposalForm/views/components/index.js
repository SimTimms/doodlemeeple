import React from 'react';
import { IconButton } from '../../../../../../../../../components';
import { Mutation } from 'react-apollo';
import { toaster } from '../../../../../../../../../utils/toaster';
import { UPDATE_CONTRACT } from '../../../../../../../../../data/mutations';

export function EditButton({ contract, jobId }) {
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
      }}
    >
      {(mutation) => {
        return (
          <IconButton
            title="Edit Proposal"
            icon="edit"
            styleOverride={null}
            color="warning"
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
