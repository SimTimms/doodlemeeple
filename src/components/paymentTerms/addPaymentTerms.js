import React from 'react';
import { useMutation } from '@apollo/client';

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
  const [mutation, { loading }] = useMutation(
    CREATE_TERM,
    {
      variables: { percent: 0, description: '', contractId: contractId },
    },
    {
      onCompleted({ paymentTermsCreateOne }) {
        toaster('Created');
        setDetailsLock(true);
        addPaymentTerm({
          _id: paymentTermsCreateOne.recordId,
          percent: 0,
          description: '',
          contractId: contractId,
        });
      },
    }
  );
  return (
    <IconButton
      disabled={percentLock.sum < 0 || percentLock.status}
      color="secondary"
      title="Add a Payment Term"
      icon=""
      onClickEvent={() => {
        mutation();
      }}
      styleOverride={{ marginTop: 0, marginBottom: 15 }}
      type="button"
      iconPos="right"
    />
  );
}
