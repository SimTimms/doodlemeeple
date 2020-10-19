import React, { useEffect } from 'react';
import { Slide } from '@material-ui/core';
import { useStyles } from '../styles';
import {
  Column,
  BorderBox,
  ContractComponentForCreator,
  Signature,
} from '../../../../../../components';
import { CreatorDashboard } from './jobDashboards/';
import ChatView from '../components/chatView';
import InvitesView from './invitesView';
import PaymentsView from './paymentsView';
import CreatorMenu from './creatorMenu';
import CreatorJobSummary from './creatorJobSummary';

export default function SummaryViewCreator({
  job,
  history,
  refreshCount,
  setRefreshCount,
}) {
  const classes = useStyles();
  const [conversationUser, setConversationUser] = React.useState(null);
  const [pageNbr, setPageNbr] = React.useState(0);
  const [tabNbr, setTabNbr] = React.useState(-1);
  const [messages, setMessages] = React.useState([]);
  const [jobData, setJobData] = React.useState(null);

  useEffect(() => {
    setJobData({ ...job });
  }, [job]);

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <CreatorMenu
          tabNbr={tabNbr}
          setTabNbr={setTabNbr}
          activeContract={job.activeContract}
          jobClosed={job.submitted === 'closed'}
        />
        {tabNbr === -1 && jobData && (
          <Column>
            <CreatorDashboard
              job={jobData}
              setConversationUser={setConversationUser}
              setTabNbr={setTabNbr}
              history={history}
            />
          </Column>
        )}
        {tabNbr === 1 && (
          <CreatorJobSummary
            jobData={{ data: jobData, setData: setJobData }}
            setTabNbr={setTabNbr}
          />
        )}
        {tabNbr === 2 && (
          <Column>
            <InvitesView
              invites={job.invites}
              setConversationUser={setConversationUser}
              setTabNbr={setTabNbr}
            />
          </Column>
        )}
        {tabNbr === 3 && (
          <BorderBox w={700}>
            <ContractComponentForCreator
              contractData={job.activeContract}
              job={job}
              history={history}
            />
            <Signature
              contractData={job.activeContract}
              onAccept={() => setTabNbr(-1)}
              onDecline={() => setTabNbr(-1)}
            />
          </BorderBox>
        )}
        {tabNbr === 4 && (
          <Column>
            <PaymentsView
              job={{ jobData: jobData, setJobData: setJobData }}
              refreshCount={refreshCount}
              setRefreshCount={setRefreshCount}
            />
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
