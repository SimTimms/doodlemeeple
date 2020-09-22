import React from 'react';
import { Mutation } from 'react-apollo';
import { CREATE_TERM } from '../../data/mutations';
import { toaster } from '../../utils/toaster';
import { IconButton } from '../';

export default function AddPaymentTerm({
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
            disabled={percentLock.sum < 0 || percentLock.status}
            color="primary"
            title="Add"
            icon=""
            onClickEvent={() => {
              mutation();
            }}
            styleOverride={{ marginTop: 0, marginBottom: 15 }}
            type="button"
            iconPos="right"
          />
        );
      }}
    </Mutation>
  );
}
