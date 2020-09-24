import React from 'react';
import { Slide } from '@material-ui/core';
import { Column } from '../../../../../components';
import SummaryView from './components/summaryView';
import ProposalView from './components/proposalView';
import { Query } from 'react-apollo';
import { JOB, INVITE_BY_ID } from '../../../../../data/queries';

export default function AppViewJob({ theme, jobId, history, inviteId }) {
  const [job, setJob] = React.useState({
    _id: null,
    name: '',
    img: '',
    summary: '',
    location: '',
    createdAt: '',
    gallery: {
      images: [],
    },
    game: { name: '', _id: '', backgroundImg: '', summary: '' },
    showreel: '',
    type: 'job',
    creativeSummary: '',
    gameId: '',
    submitted: '',
    contracts: [],
    user: { name: '', _id: '', profileImg: '' },
    invites: [
      {
        status: '',
        receiver: {
          _id: '',
          name: '',
          profileImg: '',
        },
      },
    ],
  });

  const [inviteStatus, setInviteStatus] = React.useState('');
  const [contracts, setContracts] = React.useState([]);
  const [proposalOpen, setProposalOpen] = React.useState(false);
  const [messagesEnd] = React.useState(null);

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div style={{ width: '100%' }}>
        {!proposalOpen && (
          <SummaryView
            job={job}
            history={history}
            inviteId={inviteId}
            jobId={jobId}
            setJob={setJob}
            messagesEnd={messagesEnd}
            inviteStatus={inviteStatus}
            contracts={contracts}
            setInviteStatus={setInviteStatus}
            setProposalOpen={setProposalOpen}
            proposalOpen={proposalOpen}
          />
        )}
        <Column>
          {proposalOpen && (
            <ProposalView
              jobId={jobId}
              setProposalOpen={setProposalOpen}
              history={history}
            />
          )}
          <Query
            query={JOB}
            variables={{ jobId: jobId }}
            fetchPolicy="network-only"
            onCompleted={(data) => {
              const contractIds = data.jobById.contracts.map(
                (contract) => contract.user._id
              );
              setContracts(contractIds);
              console.log(data);
              data.jobById && setJob({ ...data.jobById });
            }}
          >
            {({ data }) => {
              return null;
            }}
          </Query>
          <Query
            query={INVITE_BY_ID}
            variables={{ _id: inviteId }}
            fetchPolicy="network-only"
            onCompleted={(data) => {
              setInviteStatus(data.inviteById.status);
            }}
          >
            {({ data }) => {
              return null;
            }}
          </Query>
        </Column>
      </div>
    </Slide>
  );
}
