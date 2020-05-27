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
}) {
  const thisUserId = Cookies.get('userId');
  const [messageArray, setMessageArray] = React.useState([]);

  useEffect(() => {
    setMessageArray(messageArrayIn);

    subscribe({
      document: NEW_MESSAGES,
      updateQuery: (prev, { subscriptionData }) => {
        const messageArrayAtStart = messageArrayIn;

        setMessageArray([
          subscriptionData.data.newMessage,
          ...messageArrayAtStart,
        ]);
      },
    });
  }, [messageArrayIn, subscribe]);

  function updateMessageArray(messageIn) {
    setMessageArray([
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
      ...messageArray,
    ]);
  }

  return (
    <div>
      <div
        style={{
          padding: 20,
          background: '#fff',
          borderRadius: 10,
          marginTop: 10,
        }}
      >
        <CreateMessage
          conversationId={conversationId}
          updateMessageArray={updateMessageArray}
        />
      </div>
      <DividerWithBorder />
      <div className={classes.cardGrid}>
        {messageArray.map((message, index) => {
          return (
            message.sender && (
              <Message key={`message_${index}`} message={message} />
            )
          );
        })}
      </div>
    </div>
  );
}
