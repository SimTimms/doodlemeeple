import React, { useEffect } from 'react';
import { useMediaQuery } from '@material-ui/core';
import { Message } from '../message';
import { CreateMessage } from '../../../../../components';
import { useStyles } from './styles';
import clsx from 'clsx';

export default function Messages({
  messages,
  moreButton,
  history,
  jobId,
  receiver,
  setConversationUser,
  setMessages,
}) {
  const [messagesEnd, setMessagesEnd] = React.useState(null);
  const [viewer, setViewer] = React.useState(null);
  const classes = useStyles();
  const mobile = useMediaQuery('(max-width:800px)');

  useEffect(() => {
    messagesEnd && messagesEnd.scrollIntoView({ behavior: 'smooth' });
  });

  function updateMessageArray(messageIn) {
    setMessages([
      ...messages,
      {
        messageStr: messageIn.messageStr,
        createdAt: new Date(),
        type: messageIn.type,
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
                setViewer={setViewer}
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
      <div
        className={clsx({
          [classes.createMessage]: true,
          [classes.createMessageMobile]: mobile,
        })}
      >
        <CreateMessage
          updateMessageArray={updateMessageArray}
          jobId={jobId}
          receiver={receiver}
          setConversationUser={setConversationUser}
        />
      </div>
    </div>
  );
}
