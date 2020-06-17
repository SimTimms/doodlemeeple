import React from 'react';
import { IconButton } from '../';

export default function ViewContractButton({ history, contractId }) {
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
