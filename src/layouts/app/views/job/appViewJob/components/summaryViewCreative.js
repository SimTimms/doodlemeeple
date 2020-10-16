import React, { useEffect } from 'react';
import { Slide } from '@material-ui/core';
import { useStyles } from '../styles';
import { Column, CreateQuoteButton, Paper } from '../../../../../../components';
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

  useEffect(() => {
    setContract(job.contract);
    setInvite(job.invite);
  }, [job]);

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <CreativeMenu tabNbr={tabNbr} setTabNbr={setTabNbr} />
        {tabNbr === -1 && (
          <Column>
            <CreativeDashboard
              job={job}
              setConversationUser={setConversationUser}
              contract={contract}
              setTabNbr={setTabNbr}
              invite={{ data: invite, setData: setInvite }}
              history={history}
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
            />
          </Column>
        )}
        {tabNbr === 6 && contract ? (
          <EditProposalForm
            jobId={job.job._id}
            contractData={contract}
            setContract={setContract}
            history={history}
            setTabNbr={setTabNbr}
          />
        ) : (
          tabNbr === 6 && (
            <CreateQuoteButton
              jobId={job.job._id}
              contract={contract}
              setContract={setContract}
            />
          )
        )}
        {tabNbr === 4 && (
          <Column>
            <PaymentsView job={{ jobData: job.job, setJobData: null }} />
          </Column>
        )}
        {conversationUser && (
          <ChatView
            job={job}
            setPageNbr={setPageNbr}
            jobId={job._id}
            conversationUser={conversationUser}
            pageNbr={pageNbr}
            setConversationUser={setConversationUser}
            setMessages={setMessages}
            messages={messages}
            history={history}
          />
        )}
      </div>
    </Slide>
  );
}
