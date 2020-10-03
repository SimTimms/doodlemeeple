import React from 'react';
import { Slide } from '@material-ui/core';
import { useStyles } from '../styles';
import { Column, ContractSummary } from '../../../../../../components';
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

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <CreatorMenu tabNbr={tabNbr} setTabNbr={setTabNbr} />

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
