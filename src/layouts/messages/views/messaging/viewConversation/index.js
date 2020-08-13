import React from 'react';
import { useStyles } from './styles';
import Messages from './components/messages';
import { IconButton } from '../../../../../components';

export default function ViewConversation({
  history,
  receiver,
  jobId,
  messages,
  pageNbr,
  setPageNbr,
  setMessages,
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
          <IconButton
            icon="more_horiz"
            title=""
            iconPos="right"
            color="text-mini"
            disabled={false}
            type="button"
            styleOverride={null}
            onClickEvent={() => {
              setPageNbr(pageNbr + 1);
            }}
          />
        }
      />
    </div>
  );
}
