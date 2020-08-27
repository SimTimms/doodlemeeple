import React from 'react';
import { IconButton } from '../../../../../../../../../components';
import { Mutation } from 'react-apollo';
import { toaster } from '../../../../../../../../../utils/toaster';
import {
  CREATE_TERM,
  UPDATE_CONTRACT,
} from '../../../../../../../../../data/mutations';
import { useStyles } from './styles';

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
            color="secondary"
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

export function NextButton({ setDetailsLock, contract, setContractParent }) {
  const classes = useStyles();
  return (
    <Mutation
      mutation={UPDATE_CONTRACT}
      variables={{
        ...contract,
        status: 'preview',
      }}
      onCompleted={(data) => {
        toaster('Submitted');
        setDetailsLock(true);
        setContractParent({ ...contract, status: 'preview' });
      }}
    >
      {(mutation) => {
        return (
          <div className={classes.actionWrapper}>
            <IconButton
              title="Next"
              icon="chevron_right"
              color="primary"
              styleOverride={{ width: '100%' }}
              disabled={false}
              onClickEvent={() => mutation()}
              type="button"
              iconPos="right"
            />
          </div>
        );
      }}
    </Mutation>
  );
}
