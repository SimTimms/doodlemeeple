import React from 'react';
import { Slide, Typography } from '@material-ui/core';
import { ContractComponent, LoadIcon } from '../../../../components';
import { PREVIEW_CONTRACT } from '../../../../data/queries';
import { Query } from 'react-apollo';

export default function FullContract({ history, contractId }) {
  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div style={{ width: '100%' }}>
        <Query
          query={PREVIEW_CONTRACT}
          variables={{ contractId }}
          fetchPolicy="network-only"
        >
          {({ loading, data }) => {
            const contractData = data ? data.contractById : null;

            return loading ? (
              <LoadIcon />
            ) : !contractData ? (
              <Typography
                variant="h6"
                style={{ textAlign: 'center', marginTop: 30 }}
              >
                This quote no longer exists, it may have been retracted or
                supersceded
              </Typography>
            ) : (
              data && (
                <ContractComponent
                  contractData={contractData}
                  history={history}
                  readOnly={true}
                />
              )
            );
          }}
        </Query>
      </div>
    </Slide>
  );
}
