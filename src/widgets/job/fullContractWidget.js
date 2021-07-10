import React from 'react';
import { Query } from 'react-apollo';
import { PREVIEW_CONTRACT } from '../../data/queries';
import { Column, Signature, FullContractComponent } from '../../components';

export default function FullContractWidget({ contractId, history }) {
  return (
    <Query
      query={PREVIEW_CONTRACT}
      variables={{ contractId: contractId }}
      fetchPolicy="network-only"
    >
      {({ data }) => {
        return data ? (
          <Column wrap="wrap" w={700} m="10px 0 10px 0">
            <FullContractComponent contractData={data.contractById} />
            <Signature
              contractData={data.contractById}
              onAccept={() => {
                history.push(`/app/view-job/${data.contractById.job._id}`);
              }}
              onDecline={() =>
                history.push(`/app/view-job/${data.contractById.job._id}`)
              }
            />
          </Column>
        ) : null;
      }}
    </Query>
  );
}
