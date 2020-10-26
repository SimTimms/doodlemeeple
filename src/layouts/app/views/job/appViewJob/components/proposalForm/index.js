import React from 'react';
import { GET_CONTRACT } from '../../../../../../../data/queries';
import { Query } from 'react-apollo';
import EditProposalForm from './views/editProposal';
import {
  LoadIcon,
  ContractSummary,
  ActionWrapper,
  EditContractButton,
} from '../../../../../../../components';

export default function ProposalForm({ jobId, history, stripeID }) {
  const [contract, setContract] = React.useState({
    _id: '',
    notes: '',
    deadline: '',
    cost: '',
    paymentTerms: [],
    updatedAt: '',
    user: { name: '' },
    currency: 'GBP',
    status: 'loading',
    job: { _id: '', user: { _id: '', email: '', name: '' } },
  });

  return (
    <div style={{ width: '100%' }}>
      {contract.status === 'loading' ? (
        <LoadIcon />
      ) : contract.status === 'submitted' ? (
        <div style={{ width: '100%' }}>
          {contract._id !== '' && (
            <ContractSummary
              contractData={contract}
              contractStatus={contract.status}
            />
          )}
          <ActionWrapper>
            <EditContractButton
              contract={contract}
              setContract={setContract}
              title="Retract & Edit Quote"
            />
          </ActionWrapper>
        </div>
      ) : null}
      <Query
        query={GET_CONTRACT}
        variables={{ jobId }}
        fetchPolicy="network-only"
        onCompleted={(data) => {
          data.contractByJob
            ? setContract({ ...data.contractByJob })
            : setContract({ ...contract, status: null });
        }}
      >
        {({ loading, data }) => {
          return loading && <LoadIcon />;
        }}
      </Query>
    </div>
  );
}
