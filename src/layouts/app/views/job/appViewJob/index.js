import React from 'react';
import { Slide } from '@material-ui/core';
import { Column } from '../../../../../components';
import SummaryViewCreator from './components/summaryViewCreator';
import SummaryViewCreative from './components/summaryViewCreative';
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
  const [inviteStatus, setInviteStatus] = React.useState('');
  const [contracts, setContracts] = React.useState([]);
  const [isCreator, setIsCreator] = React.useState(null);

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div style={{ width: '100%' }}>
        {isCreator && (
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
                <SummaryViewCreator job={data.jobById} history={history} />
              ) : null;
              /*   <SummaryView
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
             />*/
            }}
          </Query>
        )}

        <Query
          query={JOB_CREATIVE}
          variables={{ jobId: jobId }}
          fetchPolicy="network-only"
          onCompleted={(data) =>
            setIsCreator(
              Cookies.get('userId') === data.jobChecklist.creator._id
            )
          }
        >
          {({ data }) => {
            return data &&
              Cookies.get('userId') !== data.jobChecklist.creator._id ? (
              <SummaryViewCreative job={data.jobChecklist} history={history} />
            ) : null;
          }}
        </Query>
      </div>
    </Slide>
  );
}
