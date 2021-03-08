import React from 'react';
import { ConversationById } from './viewConversation';
import { Query } from 'react-apollo';
import { GET_MESSAGES } from '../../data/queries';
import { Column } from '../../components';

export default function ChatViewById({
  conversationObj,
  setConversationUser,
  history,
}) {
  const [refreshCount, setRefreshCount] = React.useState(0);
  const [messages, setMessages] = React.useState([]);
  const [pageNbr, setPageNbr] = React.useState(0);
  return conversationObj.receiver ? (
    <Query
      query={GET_MESSAGES}
      variables={{
        jobId: conversationObj.jobId,
        userId: conversationObj.receiver._id,
        pageNbr: pageNbr,
        count: refreshCount,
      }}
      fetchPolicy="network-only"
      onCompleted={(data) =>
        setMessages([...data.getMessages.reverse(), ...messages])
      }
    >
      {({ data }) => {
        return data ? (
          <ConversationById
            history={history}
            receiver={conversationObj.receiver}
            jobId={conversationObj.jobId}
            messages={messages}
            pageNbr={pageNbr}
            setPageNbr={setPageNbr}
            setMessages={setMessages}
            refreshCount={refreshCount}
            setRefreshCount={setRefreshCount}
            setConversationUser={setConversationUser}
          />
        ) : null;
      }}
    </Query>
  ) : null;
}
