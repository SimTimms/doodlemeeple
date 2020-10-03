import React, { useEffect } from 'react';
import { Slide } from '@material-ui/core';
import { useStyles } from '../styles';
import { Column } from '../../../../../../components';
import { CreatorDashboard } from './jobDashboards/';
import ChatView from '../components/chatView';
import CreatorMenu from './creatorMenu';

export default function SummaryViewCreator({ job, history }) {
  const classes = useStyles();
  const [conversationUser, setConversationUser] = React.useState(null);
  const [pageNbr, setPageNbr] = React.useState(0);
  const [tabNbr, setTabNbr] = React.useState(-1);
  const [messages, setMessages] = React.useState([]);
  const [contract, setContract] = React.useState();
  useEffect(() => {
    setContract(job.contract);
  }, [job]);

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
