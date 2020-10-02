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
            icon="close"
            color="warning"
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
