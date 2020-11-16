import React from 'react';
import { useStyles } from './styles';
import Messages from './components/messages';
import { IconButton, Row } from '../../../../../components';

export default function ViewConversation({
  history,
  receiver,
  jobId,
  messages,
  pageNbr,
  setPageNbr,
  setMessages,
  setRefreshCount,
  refreshCount,
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Messages
        messages={messages}
        classes={classes}
        history={history}
        receiver={receiver}
        jobId={jobId}
        pageNbr={pageNbr}
        setMessages={setMessages}
        moreButton={<Row></Row>}
      />
    </div>
  );
}
