import React from 'react';
import { ConversationByJob } from './viewConversation';
import { Query } from 'react-apollo';
import { GET_MESSAGES } from '../../data/queries';
import { Column } from '../../components';

export default function ChatViewByJob({
  job,
  conversationUser,
  setConversationUser,
  history,
}) {
  const [refreshCount, setRefreshCount] = React.useState(0);
  const [messages, setMessages] = React.useState([]);
  const [pageNbr, setPageNbr] = React.useState(0);

  return (
    <Query
      query={GET_MESSAGES}
      variables={{
        jobId: job._id,
        userId: conversationUser._id,
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
          <Column>
            {conversationUser && (
              <ConversationByJob
                history={history}
                receiver={conversationUser}
                jobId={job._id}
                messages={messages}
                pageNbr={pageNbr}
                setPageNbr={setPageNbr}
                setMessages={setMessages}
                refreshCount={refreshCount}
                setRefreshCount={setRefreshCount}
                setConversationUser={setConversationUser}
              />
            )}
          </Column>
        ) : null;
      }}
    </Query>
  );
}
