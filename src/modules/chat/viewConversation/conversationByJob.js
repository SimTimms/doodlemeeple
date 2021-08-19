import React from 'react';
import { useStyles } from './styles';
import Messages from './components/messages';
import { Row } from '../../../components';

export default function ConversationByJob({
  receiver,
  jobId,
  messages,
  pageNbr,
  setMessages,
  setConversationUser,
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Messages
        messages={messages}
        receiver={receiver}
        jobId={jobId}
        pageNbr={pageNbr}
        setMessages={setMessages}
        moreButton={<Row></Row>}
        setConversationUser={setConversationUser}
      />
    </div>
  );
}
