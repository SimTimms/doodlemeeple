import React, { useEffect } from 'react';
import { useStyles } from '../styles';
import {
  Column,
  CreateQuoteButton,
  FullContractComponent,
} from '../../../../../../components';
import { CreativeDashboard } from './jobDashboards/';
import ChatView from '../components/chatView';
import CreativeMenu from './creativeMenu';
import EditProposalForm from './proposalForm/views/editProposal';
import PaymentsView from './paymentsView';
import CreativeJobSummary from './creativeJobSummary';

export default function SummaryViewCreative({ job, history }) {
  const classes = useStyles();
  const [conversationUser, setConversationUser] = React.useState(null);
  const [pageNbr, setPageNbr] = React.useState(0);
  const [tabNbr, setTabNbr] = React.useState(-1);
  const [messages, setMessages] = React.useState([]);
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
      {tabNbr === -1 && (
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
      {tabNbr === 6 && contract ? (
        <EditProposalForm
          contractData={contract}
          setContract={setContract}
          history={history}
        />
      ) : (
        tabNbr === 6 && (
          <CreateQuoteButton
            jobId={jobData._id}
            contract={contract}
            setContract={setContract}
          />
        )
      )}
      {tabNbr === 4 && (
        <Column>
          <PaymentsView job={{ jobData: jobData, setJobData: null }} />
        </Column>
      )}
      {tabNbr === 7 && <FullContractComponent contractData={job.contract} />}
      {conversationUser && (
        <ChatView
          job={jobData}
          setPageNbr={setPageNbr}
          jobId={jobData._id}
          conversationUser={conversationUser}
          pageNbr={pageNbr}
          setConversationUser={setConversationUser}
          setMessages={setMessages}
          messages={messages}
          history={history}
        />
      )}
    </div>
  );
}
