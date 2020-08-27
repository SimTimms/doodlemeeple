import React from 'react';
import { IconButton } from '../../../../../../../../../components';
import { Mutation } from 'react-apollo';
import { toaster } from '../../../../../../../../../utils/toaster';
import { CREATE_TERM } from '../../../../../../../../../data/mutations';

export function AddPaymentTerm({
  contractId,
  setDetailsLock,
  detailsLock,
  percentLock,
  addPaymentTerm,
}) {
  return (
    <Mutation
      mutation={CREATE_TERM}
      variables={{
        percent: 0,
        description: '',
        contractId: contractId,
      }}
      onCompleted={(data) => {
        toaster('Created');
        setDetailsLock(true);
        addPaymentTerm({
          _id: data.paymentTermsCreateOne.recordId,
          percent: 0,
          description: '',
          contractId: contractId,
        });
      }}
    >
      {(mutation, { loading }) => {
        return (
          <IconButton
            disabled={detailsLock || percentLock.sum < 0}
            color="primary"
            title="Create Payment Terms"
            icon=""
            onClickEvent={() => {
              mutation();
            }}
            styleOverride={null}
            type="button"
            iconPos="right"
          />
        );
      }}
    </Mutation>
  );
}
