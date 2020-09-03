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
        moreButton={
          <Row>
            <IconButton
              icon="more_horiz"
              title=""
              iconPos="right"
              color="text-mini"
              onClickEvent={() => {
                setPageNbr(pageNbr + 1);
              }}
            />
            <IconButton
              icon="refresh"
              title=""
              iconPos="right"
              color="text-mini"
              onClickEvent={() => {
                setMessages([]);
                setRefreshCount(refreshCount+1);
              }}
            />
          </Row>
        }
      />
    </div>
  );
}
