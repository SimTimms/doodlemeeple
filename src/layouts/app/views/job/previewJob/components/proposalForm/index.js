import React from 'react';
import { GET_CONTRACT } from '../../../../../../../data/queries';
import { Query } from 'react-apollo';
import { Typography } from '@material-ui/core';
import EditProposalForm from './views/editProposal';
import ViewProposal from './views/viewProposal';
import { ActionWrapper } from '../../../../../../../components';
import { EditButton, ViewButton } from './views/components';

import { LoadIcon } from '../../../../../../../components';

export default function ProposalForm({ jobId, history }) {
  const [contract, setContract] = React.useState({
    id: '',
    notes: '',
    deadline: '',
    cost: '',
    paymentTerms: [],
    currency: 'GBP',
    status: 'loading',
    job: { id: '', user: { id: '', email: '' } },
  });

  return (
    <div>
      {contract.status === 'loading' ? (
        <LoadIcon />
      ) : contract.status === 'submitted' ? (
        <ViewProposal
          contractData={contract}
          jobId={jobId}
          setContract={setContract}
        />
      ) : contract.status === 'sent' ? (
        <div>
          <Typography variant="h1" component="h2">
            Proposal Sent
          </Typography>
          <ActionWrapper>
            <EditButton
              contract={contract}
              jobId={jobId}
              setContract={setContract}
            />
            <ViewButton history={history} contractId={contract.id} />
          </ActionWrapper>
        </div>
      ) : (
        <EditProposalForm
          contractData={contract}
          jobId={jobId}
          setContractParent={setContract}
        />
      )}
      <Query
        query={GET_CONTRACT}
        variables={{ jobId }}
        fetchPolicy="network-only"
        onCompleted={(data) => {
          console.log(data);
          data.getContract.length > 0
            ? setContract({ ...data.getContract[0] })
            : setContract({ ...contract, status: '' });
        }}
      >
        {({ loading, data }) => {
          return loading && <LoadIcon />;
        }}
      </Query>
    </div>
  );
}
