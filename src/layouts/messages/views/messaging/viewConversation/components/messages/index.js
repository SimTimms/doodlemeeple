import React, { useEffect } from 'react';
import { Message } from '../message';
import { Button, Icon } from '@material-ui/core';

import { NEW_MESSAGES } from '../../../../../../../data/subscriptions';
import {
  CreateMessage,
  DividerWithBorder,
} from '../../../../../../../components';
import Cookies from 'js-cookie';

export default function Messages({
  messageArrayIn,
  classes,
  moreButton,
  history,
  jobId,
  receiver,
  pageNbr,
}) {
  const thisUserId = Cookies.get('userId');
  const [messageArray, setMessageArray] = React.useState([]);
  const [messagesEnd, setMessagesEnd] = React.useState(null);
  const [pageNbr, setPageNbr] = React.useState(1);

  useEffect(() => {
    setMessageArray(messageArrayIn);
  }, [messageArrayIn]);

  useEffect(() => {
    messagesEnd && messagesEnd.scrollIntoView({ behavior: 'smooth' });
  });

  function updateMessageArray(messageIn) {
    setMessageArray([
      ...messageArray,
      {
        messageStr: messageIn.messageStr,
        createdAt: new Date(),
        _id: 'new',
        receiver: { _id: '', name: '', profileImg: '' },
        sender: {
          _id: messageIn.sender._id,
          name: messageIn.sender.name,
          profileImg: messageIn.sender.profileImg,
        },
      },
    ]);
  }

  return (
    <div style={{ width: '100%' }}>
      <div className={classes.cardGrid}>
        <Button
          onClick={() => {
            setPageNbr(pageNbr + 1);
          }}
        >
          <Icon>more_horiz</Icon>
        </Button>
        {messageArray.map((message, index) => {
          return (
            message.sender && (
              <Message
                key={`message_${index}`}
                message={message}
                history={history}
              />
            )
          );
        })}
        <div
          style={{ float: 'left', clear: 'both' }}
          ref={(el) => {
            setMessagesEnd(el);
          }}
        ></div>
      </div>
      <DividerWithBorder />
      <div className={classes.createWrapper}>
        <CreateMessage
          updateMessageArray={updateMessageArray}
          jobId={jobId}
          receiver={receiver}
        />
      </div>
    </div>
  );
}
