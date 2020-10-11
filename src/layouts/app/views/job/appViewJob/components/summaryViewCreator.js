import React from 'react';
import { Slide } from '@material-ui/core';
import { useStyles } from '../styles';
import {
  Column,
  BorderBox,
  ContractComponentForCreator,
  Signature,
  PaymentElement,
  IconButton,
} from '../../../../../../components';
import { CreatorDashboard } from './jobDashboards/';
import ChatView from '../components/chatView';
import InvitesView from './invitesView';
import CreatorMenu from './creatorMenu';

export default function SummaryViewCreator({ job, history }) {
  const classes = useStyles();
  const [conversationUser, setConversationUser] = React.useState(null);
  const [pageNbr, setPageNbr] = React.useState(0);
  const [tabNbr, setTabNbr] = React.useState(-1);
  const [messages, setMessages] = React.useState([]);
  const [displayPayment, setDisplayPayment] = React.useState(false);

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <CreatorMenu
          tabNbr={tabNbr}
          setTabNbr={setTabNbr}
          activeContract={job.activeContract}
        />

        {tabNbr === -1 && (
          <Column>
            <CreatorDashboard
              job={job}
              setConversationUser={setConversationUser}
              setTabNbr={setTabNbr}
            />
          </Column>
        )}
        {tabNbr === 2 && (
          <Column>
            <InvitesView
              invites={job.invites}
              setConversationUser={setConversationUser}
            />
          </Column>
        )}
        {tabNbr === 7 && (
          <BorderBox w={700}>
            {job.activeContract.status !== 'paid' && (
              <IconButton
                title="Fund this Project"
                onClickEvent={() => setDisplayPayment(true)}
              />
            )}
            <PaymentElement
              display={displayPayment}
              contractData={job.activeContract}
            />
            <ContractComponentForCreator
              contractData={job.activeContract}
              job={job}
              history={history}
            />
            <Signature
              contractData={job.activeContract}
              onAccept={() => setTabNbr(0)}
            />
          </BorderBox>
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
