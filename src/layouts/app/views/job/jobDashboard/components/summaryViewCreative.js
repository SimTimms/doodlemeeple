import React, { useEffect } from 'react';
import { useStyles } from '../styles';
import {
  Column,
  CreateQuoteButton,
  Divider,
  FullContractComponent,
} from '../../../../../../components';
import { ChatViewByJob } from '../../../../../../modules/chat';
import EditProposalForm from './proposalForm/views/editProposal';
import CreativeJobSummary from './creativeJobSummary';
import DeclineInviteView from './declineInviteView';
import CheckListCreativeDash from '../components/jobDashboards/CheckListCreativeDash';

export default function SummaryViewCreative({
  job,
  history,
  setPageValues,
  pageValues,
}) {
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
      {conversationUser ? (
        <ChatViewByJob
          job={job.job}
          conversationUser={conversationUser}
          setConversationUser={setConversationUser}
          history={history}
        />
      ) : (
        pageValues.secondaryPage === 'work_dashboard_home' && (
          <Column>
            <CheckListCreativeDash
              declined={
                invite && invite.data && invite.data.status === 'declined'
              }
              invite={invite.data}
              setTabNbr={setTabNbr}
              job={job}
              history={history}
              setConversationUser={setConversationUser}
              jobHasBeenAwarded={jobHasBeenAwarded}
              activeContract={activeContract}
              userContractStatus={userContractStatus}
              contractData={job.contract}
            />
          </Column>
        )
      )}
      {pageValues.secondaryPage === 'work_description' && (
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
      {pageValues.secondaryPage === 'work_contract' && contract ? (
        <Column w={800}>
          <Divider />
          <FullContractComponent contractData={contract} />
        </Column>
      ) : (
        tabNbr === 6 && (
          <CreateQuoteButton
            jobId={jobData._id}
            contract={contract}
            setContract={setContract}
          />
        )
      )}
      {tabNbr === 7 && <FullContractComponent contractData={job.contract} />}
      {tabNbr === 8 && (
        <DeclineInviteView inviteId={invite._id} history={history} />
      )}
    </div>
  );
}
