import React from 'react';
import { GET_CONTRACT } from '../../../../../../../data/queries';
import { Query } from 'react-apollo';
import EditProposalForm from './views/editProposal';
import ViewProposal from './views/viewProposal';
import { LoadIcon } from '../../../../../../../components';

export default function ProposalForm({ jobId }) {
  const [contract, setContract] = React.useState({ status: 'loading' });
  return (
    <div>
      {contract.status === 'loading' ? (
        <LoadIcon />
      ) : contract.status === 'edit' ? (
        <EditProposalForm contractData={contract} jobId={jobId} />
      ) : (
        <ViewProposal contractData={contract} jobId={jobId} />
      )}
      <Query
        query={GET_CONTRACT}
        variables={{ jobId }}
        fetchPolicy="network-only"
        onCompleted={(data) => setContract({ ...data.getContract[0] })}
      >
        {({ loading, data }) => {
          return loading && <LoadIcon />;
        }}
      </Query>
    </div>
  );
}
