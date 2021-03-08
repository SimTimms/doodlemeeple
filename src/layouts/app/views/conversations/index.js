import React from 'react';
import Conversations from '../../../../modules/chat/conversations';
import { ChatViewById } from '../../../../modules/chat';

export default function ConversationModule({ history }) {
  const [conversationObj, setConversationObj] = React.useState({
    receiver: null,
    sender: null,
  });

  function setConversationUser() {
    setConversationObj({ receiver: null, sender: null });
  }

  return (
    <div style={{ width: '400px', margin: 'auto' }}>
      {!conversationObj.receiver ? (
        <Conversations
          history={history}
          setConversationObj={setConversationObj}
        />
      ) : (
        <ChatViewById
          conversationObj={conversationObj}
          setConversationUser={() => setConversationUser()}
        />
      )}
    </div>
  );
}
