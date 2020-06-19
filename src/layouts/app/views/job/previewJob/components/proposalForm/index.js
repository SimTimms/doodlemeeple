import React from 'react';
import { GET_CONTRACT } from '../../../../../../../data/queries';
import { Query } from 'react-apollo';
import EditProposalForm from './views/editProposal';

import {
  LoadIcon,
  ContractSummary,
  ActionWrapper,
  EditContractButton,
  SubmitContractButton,
} from '../../../../../../../components';

export default function ProposalForm({ jobId }) {
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
    <div style={{ padding: 10 }}>
      {contract.status === 'loading' ? (
        <LoadIcon />
      ) : contract.status === 'submitted' ? (
        <div>
          <ContractSummary contractId={contract.id} />
          <ActionWrapper>
            <EditContractButton
              contract={contract}
              jobId={jobId}
              setContract={setContract}
              title="Retract & Edit Quote"
            />
          </ActionWrapper>
        </div>
      ) : contract.status === 'preview' ? (
        <div>
          <ContractSummary contractId={contract.id} />
          <ActionWrapper>
            <EditContractButton
              contract={contract}
              jobId={jobId}
              setContract={setContract}
              title="Edit Quote"
            />
            <SubmitContractButton
              contract={contract}
              jobId={jobId}
              setContract={setContract}
            />
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
