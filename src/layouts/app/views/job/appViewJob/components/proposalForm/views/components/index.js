import React from 'react';
import { IconButton } from '../../../../../../../../../components';
import { Mutation } from 'react-apollo';
import { toaster } from '../../../../../../../../../utils/toaster';
import { UPDATE_CONTRACT } from '../../../../../../../../../data/mutations';
import { useStyles } from './styles';

export function SubmitButton({ setDetailsLock, contract, setContractParent }) {
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
              title="Submit"
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
