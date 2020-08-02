import React, { useEffect } from 'react';
import { Message } from '../message';
import { NEW_MESSAGES } from '../../../../../../../data/subscriptions';
import {
  CreateMessage,
  DividerWithBorder,
} from '../../../../../../../components';
import Cookies from 'js-cookie';

export default function Messages({
  conversationId,
  messageArrayIn,
  classes,
  subscribe,
  moreButton,
  history,
}) {
  const thisUserId = Cookies.get('userId');
  const [messageArray, setMessageArray] = React.useState([]);
  const [messagesEnd, setMessagesEnd] = React.useState(null);
  const [subscribed, setSubscribed] = React.useState(false);

  useEffect(() => {
    setMessageArray(messageArrayIn);
    !subscribed &&
      subscribe({
        document: NEW_MESSAGES,
        variables: { conversationId },
        updateQuery: (prev, { subscriptionData }) => {
          if (!subscriptionData.data) return prev;

          const newMessage = subscriptionData.data.newMessage;

          setMessageArray([...prev.getConversation.messages, newMessage]);

          return Object.assign({}, prev, {
            getConversation: {
              id: prev.getConversation.id,
              participants: prev.getConversation.participants,
              job: prev.getConversation.job,
              createdAt: prev.getConversation.createdAt,
              messages: [...prev.getConversation.messages, newMessage],
              __typename: prev.getConversation.__typename,
            },
          });
        },
      });
    setSubscribed(true);
  }, [messageArrayIn, subscribe, conversationId, setSubscribed, subscribed]);

  useEffect(() => {
    messagesEnd && messagesEnd.scrollIntoView({ behavior: 'smooth' });
  });

  function updateMessageArray(messageIn) {
    setMessageArray([
      ...messageArray,
      {
        messageStr: messageIn,
        createdAt: new Date(),
        id: 'new',
        receiver: { id: '', name: '', profileImg: '' },
        sender: {
          id: thisUserId,
          name: 'sending...',
          profileImg: null,
        },
      },
    ]);
  }

  return (
    <div style={{ width: '100%' }}>
      <div className={classes.cardGrid}>
        {moreButton}
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
          conversationId={conversationId}
          updateMessageArray={updateMessageArray}
        />
      </div>
    </div>
  );
}
