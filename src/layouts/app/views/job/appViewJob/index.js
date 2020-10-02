import React from 'react';
import { Slide } from '@material-ui/core';
import { Column } from '../../../../../components';
import SummaryView from './components/summaryView';
import SummaryViewCreative from './components/summaryViewCreative';
import ProposalView from './components/proposalView';
import { Query } from 'react-apollo';
import { JOB, JOB_CREATIVE, INVITE_BY_ID } from '../../../../../data/queries';
import Cookies from 'js-cookie';

export default function AppViewJob({
  theme,
  jobId,
  history,
  inviteId,
  profile,
}) {
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
  const isCreator = Cookies.get('userId') === job.user._id;
  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div style={{ width: '100%' }}>
        {!proposalOpen && isCreator && (
          <Query
            query={JOB}
            variables={{ jobId: jobId }}
            fetchPolicy="network-only"
            onCompleted={(data) => {
              const contractIds = data.jobById.contracts.map(
                (contract) => contract.user._id
              );
              setContracts(contractIds);
            }}
          >
            {({ data }) => {
              return data ? (
                <SummaryView
                  job={data.jobById}
                  history={history}
                  inviteId={inviteId}
                  jobId={job._id}
                  setJob={setJob}
                  messagesEnd={messagesEnd}
                  inviteStatus={inviteStatus}
                  contracts={contracts}
                  setInviteStatus={setInviteStatus}
                  setProposalOpen={setProposalOpen}
                  proposalOpen={proposalOpen}
                  stripeID={profile.stripeID}
                  theme={theme}
                />
              ) : null;
            }}
          </Query>
        )}
        {!proposalOpen && !isCreator && (
          <Query
            query={JOB_CREATIVE}
            variables={{ jobId: jobId }}
            fetchPolicy="network-only"
          >
            {({ data }) => {
              return data ? (
                <SummaryViewCreative
                  job={data.jobChecklist}
                  history={history}
                />
              ) : null;
            }}
          </Query>
        )}

        <Column>
          {proposalOpen && (
            <ProposalView
              jobId={jobId}
              setProposalOpen={setProposalOpen}
              history={history}
              stripeID={profile.stripeID}
            />
          )}

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
