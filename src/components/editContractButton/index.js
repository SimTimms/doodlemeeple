import React from 'react';
import { IconButton } from '../';
import { Mutation } from 'react-apollo';
import { toaster } from '../../utils/toaster';
import { UPDATE_CONTRACT } from '../../data/mutations';

export default function EditContractButton({ contract, setContract, title }) {
  return (
    <Mutation
      mutation={UPDATE_CONTRACT}
      variables={{
        _id: contract._id,
        status: null,
      }}
      onCompleted={(data) => {
        toaster('Editing');
        setContract({ ...contract, status: null });
      }}
    >
      {(mutation) => {
        return (
          <IconButton
            title={title}
            icon="close"
            color="primary"
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
