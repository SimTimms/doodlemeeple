import React from 'react';
import Conversations from '../../../../modules/chat/conversations';
import { ChatViewById } from '../../../../modules/chat';
import { TabPage } from '../../../../components';
import { messageMenu } from '../../../menuArray';

export default function ConversationModule({ history }) {
  const [conversationObj, setConversationObj] = React.useState({
    receiver: null,
    sender: null,
  });

  function setConversationUser() {
    setConversationObj({ receiver: null, sender: null });
  }

  return (
    <TabPage
      title={null}
      primaryMenu={messageMenu()}
      secondaryMenu={null}
      menu={null}
      activePrimary={'messages'}
      activeSecondary={''}
    >
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
    </TabPage>
  );
}
