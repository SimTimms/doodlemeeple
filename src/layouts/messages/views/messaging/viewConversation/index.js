import React from 'react';
import { Button, Icon } from '@material-ui/core';
import { useStyles } from './styles';
import Messages from './components/messages';

export default function ViewConversation({
  history,
  receiver,
  jobId,
  messages,
}) {
  const classes = useStyles();
  const [pageNbr, setPageNbr] = React.useState(1);

  return (
    <div className={classes.root}>
      <Messages
        messageArrayIn={messages}
        classes={classes}
        history={history}
        receiver={receiver}
        jobId={jobId}
        pageNbr={pageNbr}
        moreButton={
          <Button
            onClick={() => {
              setPageNbr(pageNbr + 1);
            }}
          >
            <Icon>more_horiz</Icon>
          </Button>
        }
      />
    </div>
  );
}
