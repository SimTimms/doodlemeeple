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
}) {
  const thisUserId = Cookies.get('userId');
  const [messageArray, setMessageArray] = React.useState([]);
  const [messagesEnd, setMessagesEnd] = React.useState(null);

  useEffect(() => {
    setMessageArray(messageArrayIn);

    subscribe({
      document: NEW_MESSAGES,
      variables: { conversationId },
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;

        const newMessage = subscriptionData.data.newMessage;
        const exists = prev.getConversation.messages.find(
          ({ id }) => id === newMessage.id,
        );

        if (exists) return prev;
        return Object.assign({}, prev, {
          getConversation: {
            id: prev.getConversation.id,
            participants: prev.getConversation.participants,
            job: prev.getConversation.job,
            createdAt: prev.getConversation.createdAt,
            messages: [newMessage, ...prev.getConversation.messages.reverse()],
            __typename: prev.getConversation.__typename,
          },
        });
      },
    });
  }, [messageArrayIn, subscribe, conversationId]);

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
        reciever: { id: '', name: '', profileImg: '' },
        sender: {
          id: thisUserId,
          name: 'sending...',
          profileImg: null,
        },
      },
    ]);
  }

  return (
    <div>
      <div className={classes.cardGrid}>
        {moreButton}
        {messageArray.map((message, index) => {
          return (
            message.sender && (
              <Message key={`message_${index}`} message={message} />
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
