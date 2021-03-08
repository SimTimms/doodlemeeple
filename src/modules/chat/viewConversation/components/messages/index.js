import React, { useEffect } from 'react';
import { Message } from '../message';
import { CreateMessage } from '../../../../../components';
import { useStyles } from './styles';

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
      <div className={classes.createMessage}>
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
