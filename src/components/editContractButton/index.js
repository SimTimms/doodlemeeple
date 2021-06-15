import React from 'react';
import { IconButton } from '../';
import { useMutation } from '@apollo/client';
import { toaster } from '../../utils/toaster';
import { UPDATE_CONTRACT } from '../../data/mutations';

export default function EditContractButton({ contract, setContract, title }) {
  const [mutation, { loading }] = useMutation(
    UPDATE_CONTRACT,
    {
      variables: { _id: contract._id, status: null },
    },
    {
      onCompleted() {
        toaster('Editing');
        setContract({ ...contract, status: null });
      },
    }
  );
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
}
