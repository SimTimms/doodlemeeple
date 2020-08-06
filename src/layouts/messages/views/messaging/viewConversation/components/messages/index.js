import React, { useEffect } from 'react';
import { Message } from '../message';
import {
  CreateMessage,
  DividerWithBorder,
} from '../../../../../../../components';

export default function Messages({
  messages,
  classes,
  moreButton,
  history,
  jobId,
  receiver,
  pageNbr,
  setMessages,
}) {
  const [messagesEnd, setMessagesEnd] = React.useState(null);

  useEffect(() => {
    messagesEnd && messagesEnd.scrollIntoView({ behavior: 'smooth' });
  });

  function updateMessageArray(messageIn) {
    setMessages([
      ...messages,
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
        {moreButton}
        {messages.map((message, index) => {
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
