import React, { useEffect } from 'react';
import { useStyles } from '../styles';
import {
  Column,
  CreateQuoteButton,
  FullContractComponent,
} from '../../../../../../components';
import { CreativeDashboard } from './jobDashboards/';
import { ChatViewByJob } from '../../../../../../modules/chat';
import CreativeMenu from './creativeMenu';

import CreativeJobSummary from './creativeJobSummary';
import DeclineInviteView from './declineInviteView';

export default function SummaryViewCreative({ job, history }) {
  const classes = useStyles();
  const [conversationUser, setConversationUser] = React.useState(null);
  const [tabNbr, setTabNbr] = React.useState(-1);
  const [contract, setContract] = React.useState();
  const [invite, setInvite] = React.useState({});
  const jobHasBeenAwarded = job.job.activeContract;
  const activeContract =
    job.job.activeContract && job.contract
      ? job.job.activeContract._id === job.contract._id
      : false;
  const userContract = job.contract && job.contract._id;
  const userContractStatus = job.contract && job.contract.status;
  const jobData = job.job;
  const closed = job.job.submitted === 'closed';

  useEffect(() => {
    setContract(job.contract);
    setInvite(job.invite);
  }, [job]);

  return (
    <div className={classes.root}>
      <CreativeMenu
        tabNbr={tabNbr}
        setTabNbr={setTabNbr}
        activeContract={activeContract}
        closed={closed}
      />
      {conversationUser ? (
        <ChatViewByJob
          job={job.job}
          conversationUser={conversationUser}
          setConversationUser={setConversationUser}
          history={history}
        />
      ) : (
        tabNbr === -1 && (
          <Column>
            <CreativeDashboard
              job={job}
              contractData={contract}
              setConversationUser={setConversationUser}
              setTabNbr={setTabNbr}
              invite={{ data: invite, setData: setInvite }}
              history={history}
              jobHasBeenAwarded={jobHasBeenAwarded}
              activeContract={activeContract}
              userContractStatus={userContractStatus}
            />
          </Column>
        )
      )}
      {tabNbr === 1 && (
        <Column>
          <CreativeJobSummary
            job={job}
            history={history}
            invite={{ data: invite, setData: setInvite }}
            setTabNbr={setTabNbr}
            userContract={userContract}
            userContractStatus={userContractStatus}
          />
        </Column>
      )}

      {tabNbr === 7 && <FullContractComponent contractData={job.contract} />}
      {tabNbr === 8 && (
        <DeclineInviteView inviteId={invite._id} history={history} />
      )}
    </div>
  );
}
